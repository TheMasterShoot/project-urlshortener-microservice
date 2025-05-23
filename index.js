require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));  // <-- parsear body urlencoded

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Variables para almacenar URLs
const urlDatabase = {};
let urlCount = 1;

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

// POST /api/shorturl para crear short_url
app.post('/api/shorturl', (req, res) => {
  const original_url = req.body.url;

  try {
    const validUrl = new URL(original_url);
    if (validUrl.protocol !== 'http:' && validUrl.protocol !== 'https:') {
      return res.json({ error: 'invalid url' });
    }

    // Revisa si la URL ya existe
    for (const key in urlDatabase) {
      if (urlDatabase[key] === original_url) {
        return res.json({ original_url, short_url: Number(key) });
      }
    }

    // Guarda nueva URL
    urlDatabase[urlCount] = original_url;
    res.json({ original_url, short_url: urlCount });
    urlCount++;

  } catch (e) {
    res.json({ error: 'invalid url' });
  }
});

// GET /api/shorturl/:short_url para redirigir
app.get('/api/shorturl/:short_url', (req, res) => {
  const short_url = req.params.short_url;
  const original_url = urlDatabase[short_url];

  if (original_url) {
    res.redirect(original_url);
  } else {
    res.json({ error: 'No short URL found for the given input' });
  }
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
