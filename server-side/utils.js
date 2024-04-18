import bcrypt from "bcrypt"
export const SECRET = "CoderCoder123";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import passport from "passport";

export const configureViews = (app) => {
    // Obtener la ruta base del archivo actual
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    // Configurar el directorio de vistas
    app.set('views', join(__dirname, 'views'));
};

 export const creaHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

 export const validaPassword = (user, password) => bcrypt.compareSync(password, user.password)

 export const passportCall = (estrategy) => {
    return function (req, res, next) {
        passport.authenticate(estrategy, function (err, user, info, status) {
            if (err) { return next(err) }
            if (!user) {
                res.setHeader('Content-Type','application/json');
                return res.status(401).json({
                    error:info.message?info.message:info.toString(),
                    detalle:info.detalle?info.detalle:"-",

                })
            }
            // res.redirect('/account');
            req.user=user
            next()
        })(req, res, next);
    }
}