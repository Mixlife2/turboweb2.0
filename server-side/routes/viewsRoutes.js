import { Router } from 'express';
import { passportCall } from '../utils.js';
export const router=Router()

router.get('/',(req,res)=>{

    res.status(200).render('home')
})

router.get('/login',(req,res)=>{

    res.status(200).render('login', {login:req.user})
})

router.get('/register',(req,res)=>{

    let {error, mensaje} = req.query

    res.status(200).render('register', {error, mensaje}), {login:req.user}
})

router.get('/perfil',  (req,res)=>{

    let user=req.usuario

    res.status(200).render('perfil', {user, login:req.usuario})
})

router.get('/logout',(req,res)=>{

    res.status(200).render('logout')
})