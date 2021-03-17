import https from 'https';

export default function handler(req, res) {
  https.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`, (response) => {
    res.status(200).json(response);
  }).on('error', (e) => {
    console.error(e);
  });
}