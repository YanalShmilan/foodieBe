const express = require('express');
const { IngCat, Ingredient } = require('../db/models');
const router = express.Router();
const {
  getIngCats,
  createIngCat,
  createIngredient,
  getIngCatDetails,
} = require('../controllers/ingCatController');
router.param('ingCatId', async (req, res, next, ingCatId) => {
  const ingCat = await IngCat.findByPk(ingCatId, {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: {
      model: Ingredient,
      attributes: ['id'],
      as: 'ingredients',
    },
  });
  if (ingCat) {
    req.ingCat = ingCat;
    next();
  } else {
    next({ message: 'cuisine not found', status: 404 });
  }
});

router.post('/:ingCatId/createIngredient', createIngredient);

router.get('/details/:ingCatId', getIngCatDetails);

router.get('/', getIngCats);

router.post('/', createIngCat);

module.exports = router;
