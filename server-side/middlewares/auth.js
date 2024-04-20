   export const auth=(accesos=[])=>{
        return (req, res, next)=>{
            console.log("Usuario autenticado:", req.user);
            accesos=accesos.map(a=>a.toLowerCase())
    
            if(accesos.includes("public")){
                return next()
            }
    
            if (!req.user) {

                res.setHeader('Content-Type', 'application/json');
                return res.status(401).json({ error: `No se ha iniciado sesión` });
            }
            
            if (!req.user.role) {
                res.setHeader('Content-Type', 'application/json');
                return res.status(401).json({ error: `El usuario autenticado no tiene un rol asignado` });
            }
            
    
            if(!accesos.includes(req.user.role.toLowerCase())){
                res.setHeader('Content-Type','application/json');
                return res.status(403).json({error:`No tiene privilegios suficientes para acceder al recurso`})
            }
    
            next()
        }
    }