import request from 'request';

export default function handler(req, res) {
  const options = {
    url: 'https://api.mercadolibre.com/sites/MLA/search',
    qs: req.query,
    method: 'GET',
  };
  request(options,(err, response, body) =>{
    try{
      res.status(200).json(body);
    }catch(err){
      res.status(400).json(err);
    }
});
}