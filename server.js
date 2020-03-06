const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors())
const PORT = process.env.PORT || 4000;

// ---------------------------------------- MIDDLEWARE ---------------------------------------- //

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Custom Logger Middleware
app.use((req, res, next) => {
  const url = req.url;
  const method = req.method;
  const requestedAt = new Date().toLocaleString();
  console.table({ url, method, requestedAt });
  next();
});

// User Session
app.use(session({
  secret: 'Shhhh, this is a secret...!',
  resave: false,
  saveUninitialized: false // Only save the session if a property has been added to req.session
}));
// ------------------------------------------ ROUTES ------------------------------------------ //

// GET Root Route
app.use('/api/v1/all', routes.home);

// Auth Routes
app.use('/api/v1/auth', routes.auth);

// User Routes
app.use('/api/v1/users', routes.users);

// Work Routes
app.use('/api/v1/works', routes.works);

// Event Routes
app.use('/api/v1/events', routes.events);

// Genre Routes
app.use('/api/v1/genres', routes.genres);


// ---------------------------------------- START SERVER ---------------------------------------- //

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
