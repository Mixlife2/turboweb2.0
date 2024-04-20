import passport from "passport"
import local from "passport-local"
import jwt from "jsonwebtoken"
import passportjwt from 'passport-jwt'
import { UsersManager } from "../dao/DBmanager/usersManager.js"
import { creaHash, SECRET, validaPassword } from "../utils.js"

const usersManager = new UsersManager()

const searchToken = (req) => {
    let token= null 

    if(req.signedCookies.turboCookie){
        token= req.signedCookies.turboCookie
    }


    return token
}

 export const initPassport = () => {


    passport.use(
        "register",
        new local.Strategy(
            {
                usernameField:"email",
                passReqToCallback: true,
                
            },
            async function(req,username, password, done) {
                try {
                    console.log("Datos de entrada en la estrategia de registro:", req.body);
                    let { username, email, role } = req.body;
                    if (!username || !email || !role) {
                        console.log("Falta algún dato de entrada");
                        return done(null,false);
                    }
                    let exist = await usersManager.getBy({ email });
                    if (exist) {
                        console.log("El usuario ya existe");
                        return done (null, false);
                    }
                
                    password = creaHash(password);
                    console.log("Contraseña hasheada:", password);
    
                    let newUser = await usersManager.create({ username, email, password, role});
                    console.log("Nuevo usuario creado:", newUser);
            
                    return done(null, newUser);
                   
                   
                } catch (error) {
                    return done(error)
                }
            }
        )
    )


    passport.use(
        "login",
        new local.Strategy(
            {
                usernameField: "email"
            },
            async (username, password, done) => {
                try {
                    let user = await usersManager.getBy({ email: username });
                    
                    if (!user) {
                        return done(null, false);
                    }
    
                    if (!validaPassword(user, password)) {
                        
                        return done(null, false);
                    }

    
                    let token = jwt.sign(user, SECRET, { expiresIn: "1h" });
                    
                    return done(null, user, token);
                } catch (error) {
                    console.error("Error en la estrategia de login:", error);
                    return done(error);
                }
            }
        )
    );
    


    passport.use(
        "jwt",
        new passportjwt.Strategy(
            {
               secretOrKey: SECRET,
               jwtFromRequest: new passportjwt.ExtractJwt.fromExtractors([searchToken]) 
            },
            async (contentToken, done) => {
                try {
                    
                    return done(null, contentToken)
                } catch (error) {
                    return done (error)
                }
            }
        )
    )
}
