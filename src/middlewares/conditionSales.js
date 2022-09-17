// requisito 6

let validationError = false;
const errorDetails = { status: 0, message: '' };

const validateSales = (productId, quantity) => {
  if (validationError) return;

  if (!productId) {
    validationError = true; errorDetails.status = 400;
    errorDetails.message = '"productId" is required';
    return;
  }
  if (quantity <= 0) {
    validationError = true; errorDetails.status = 422;
    errorDetails.message = '"quantity" must be greater than or equal to 1';
    return;
  }
  if (!quantity) {
    validationError = true; errorDetails.status = 400;
    errorDetails.message = '"quantity" is required';
  }
};

const conditionSales = async (req, res, next) => {
  validationError = false;
  req.body.forEach(async ({ productId, quantity }) => {
    validateSales(productId, quantity);
  });

  if (validationError) {
    return res.status(errorDetails.status).json({ message: errorDetails.message });
  }

  next();
};

module.exports = conditionSales;