const express = require('express');
const multer = require('multer');
const { calculateCarValue } = require('./api-01');
const { calculateRiskRating } = require('./api-02');
const { generateQuote } = require('./api-03');

const router = express.Router();

// Set up multer for handling form-data (no files here, just form fields)
const upload = multer(); // No storage configuration, so it will process data in memory

// Route for calculating car value
router.post('/calculateCarValue', upload.none(), (req, res) => {
  const result = calculateCarValue(req.body);  // req.body now contains form data
  res.json(result);
});

// Route for calculating risk rating
router.post('/calculateRiskRating', upload.none(), (req, res) => {
  const result = calculateRiskRating(req.body);  // req.body now contains form data
  res.json(result);
});

// Route for generating insurance quote
router.post('/generateQuote', upload.none(), (req, res) => {
  const result = generateQuote(req.body);  // req.body now contains form data
  res.json(result);
});

module.exports = router;

