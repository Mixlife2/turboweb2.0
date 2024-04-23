import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import { engine } from 'express-handlebars';
import { router as sessionsRoutes } from './routes/sessionsRoutes.js';
import { router as viewsRoutes } from './routes/viewsRoutes.js';
import { router as usersRoutes } from './routes/usersRoutes.js';
import { router as projectsRoutes } from './routes/projectsRoutes.js';
import { initPassport } from './config/passport.config.js';
import cookieParser from 'cookie-parser';
import './db.js';

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', new URL('./views', import.meta.url).pathname);
app.use(cookieParser("turboCookie"))

app.use(express.static('./src/public'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

initPassport()
app.use(passport.initialize())



app.use('/', viewsRoutes);
app.use("/api/sessions", sessionsRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/projects", projectsRoutes)

app.get('*', (req, res) => {
  res.status(404).send("error 404, not found.");
  
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

