const express = require('express');
const path = require('path');
const cors = require('cors');
const cuisinesRoutes = require('./routes/cuisines');
const recipesRoutes = require('./routes/recipes');
const ingCatRoutes = require('./routes/ingCat');
const ingredientsRoutes = require('./routes/ingredients');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/cuisines', cuisinesRoutes);
app.use('/recipes', recipesRoutes);
app.use('/ingcat', ingCatRoutes);
app.use('/ingredients', ingredientsRoutes);

app.use('/media', express.static(path.join(__dirname, 'media')));
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res
    .status(err.status ?? 500)
    .json(err.message ?? { message: 'Internal Server Error.!' });
});
app.listen(8000, () => {});
