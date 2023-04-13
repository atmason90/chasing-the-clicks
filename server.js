const path = require("path");
const express = require('express');
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequlizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "mysecrectshhh",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequlizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
