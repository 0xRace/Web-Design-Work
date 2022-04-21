/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('You touched the foodService route!');
  res.json({message: 'Welcome to the PG County food API'});
});

export default router; 