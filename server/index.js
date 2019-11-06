const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose');
const MovieModel = require('./schemas/Movie');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json({ limit: '10mb', extended: true }));

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.post('/search', urlencodedParser, async (req, res, next) => {
    try {
      const { genre, ratings, years, page, limit, keywords } = req.body;
      const sorting = {};
      sorting['rating'] = -1;
      const skip = limit * (page - 1);
      const count = limit * page;
      const queryTerms = [
        {
          $match: {
            year: { $gte: years[0], $lte: years[1] },
            rating: { $gte: ratings[0], $lte: ratings[1] }
          }
        },
        { $sort: sorting },
        { $limit: count },
        { $skip: skip },
      ]
      if (keywords !== '')
        queryTerms.unshift({ $match: { ...queryTerms.$match, title: { $regex: keywords, $options: "i" } } });
      if (genre !== 'All')
        queryTerms.unshift({ $match: { ...queryTerms.$match, genres: genre.toLowerCase() } });
      movieList = await MovieModel.aggregate(queryTerms);
      res.status(200).json(movieList);
    } catch (error) {
      console.log(error.message);
    }
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })

    mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.connect(
    "mongodb+srv://Team:Apkm5VCrxWTRPYxK@cluster0-shqxc.mongodb.net/hypertube_db?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  );

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("Database connected!");
  });
}
start();