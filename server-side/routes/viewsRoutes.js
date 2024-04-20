import { Router } from 'express';
import { passportCall } from '../utils.js';
import { auth } from '../middlewares/auth.js';
export const router=Router()

router.get('/',(req,res)=>{

    res.status(200).render('home')
})

router.get('/login',(req,res)=>{

    res.status(200).render('login', {login:req.user})
})

router.get('/register', (req, res) => {
    let { error, mensaje } = req.query;
    res.status(200).render('register', { error, mensaje, login: req.user }); // Aquí corregido
});


router.get('/profile', auth(["freelancer", "business"]), (req, res) => {
    let user = req.user;
    res.status(200).render('profile', { user, login: req.user });
});


router.get('/logout',(req,res)=>{

    res.status(200).render('logout')
})