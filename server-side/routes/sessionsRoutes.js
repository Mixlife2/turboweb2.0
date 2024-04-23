import { Router } from 'express';
import { UsersManager } from '../dao/DBmanager/usersManager.js';
import passport from "passport"
import { passportCall, SECRET } from '../utils.js';
import { auth } from '../middlewares/auth.js';
import jwt from 'jsonwebtoken'

export const router= Router()


const usersManager = new UsersManager()

router.get("/errorLogin", (req, res)=>{
    return res.status(400).json({error:`Error en el proceso de login... :(`})
})

router.post('/login',passport.authenticate("login", {session: false, failureRedirect:"/api/sessions/errorLogin"}), async(req,res)=>{

    let user=req.user
    user={...user}
    delete user.password
    let token = req.authInfo;

    res.cookie("turboCookie", token, {maxAge: 1000*60*60, signed:true, httpOnly: true})

    req.user=user 


    
    res.redirect("/profile");
})


router.get('/errorRegister', (req, res)=> {
    return res.redirect('register?error=Error en el proceso de registro')
})

router.post('/register', passport.authenticate("register", {session: false, failureRedirect:"/api/sessions/errorRegister"}), async(req,res)=>{
    console.log(req.user) 
    return res.redirect(`/register?mensaje=Registro exitoso para ${req.user.username}`);
});

router.get("/google", passport.authenticate("google",passportCall("jwt"), {session: false}), (req, res) => {})

router.get('/callbackGoogle', passport.authenticate("google", {session: false, failureRedirect:"/api/sessions/errorGoogle"}), (req,res)=>{

    let user=req.user
    user={...user}
    delete user.password
    let token = req.authInfo;

    res.cookie("turboCookie", token, {maxAge: 1000*60*60, signed:true, httpOnly: true})

    req.user=user 


    
    res.redirect("/profile");
        
        
        
    });

router.get("/errorGoogle", (req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(500).json(
        {
            error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
            detalle:`Fallo al autenticar con Google`
        }
    )
    
})


router.get('/profile', passportCall("jwt"), auth(["freelancer", "business"]), (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        mensaje: 'Perfil usuario obtenido correctamente',
    });
});






router.get('/logout', (req, res) => {
    // Eliminar la cookie turboCookie
    res.clearCookie('turboCookie');
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        message: "Logout exitoso",
    });
});
