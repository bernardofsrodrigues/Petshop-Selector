const petshopService = require('../services/petshopService');

exports.getBestPetshop = (req, res) => {
  const { date, smallDogs, largeDogs } = req.body;
  const result = petshopService.findBestPetshop(date, smallDogs, largeDogs);
  res.json(result);
};
