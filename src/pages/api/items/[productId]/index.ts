import https from 'https';

export default function handler(req, res) {
  const { productId } = req.query;
  https.get(`https://api.mercadolibre.com/items/${productId}`, (response) => {
    res.status(200).json(response);
  }).on('error', (e) => {
    console.error(e);
  });
}