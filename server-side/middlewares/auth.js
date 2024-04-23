import passport from 'passport';

export const passportCall = (strategy) => {
  return async (req, res, next) => {
    passport.authenticate(strategy, function (err, user, info) {
      if (err) return next(err);
      if (!user) return res.status(401).json({ error: info.message });
      req.login(user, { session: false }, function (err) {
        if (err) return next(err);
        return next();
      });
    })(req, res, next);
  };
};

export const auth = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'No tienes permisos para acceder a esta ruta' });
    }
    next();
  };
};
