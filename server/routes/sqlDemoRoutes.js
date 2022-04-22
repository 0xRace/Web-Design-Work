/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import chalk from 'chalk';
import fetch from 'node-fetch';

const router = express.Router();

// /sqlDemo
router.route('/')
  .get(async (req, res) => {
    try {
      console.log('Touched sqlDemo get');
      res.json({data: []});
    } catch (err) {
      console.log('sqlDemo get error',err);
      res.json({message: 'something wrong in sqlDemo'});
    }
  })
  .post(async (req, res) => {
    try {
      console.log(req.body);
      console.log(req.body?.dining);
      const hallId = req.body?.dining || 0;
      const result = await db.sequelizeDB.query(hallIdQuery, {
        replacements: { hall_id: hallId },
        type: sequelize.QueryTypes.SELECT
      });
      res.json({data: result});
    } catch (err) {
      console.log(err);
      res.send({message: 'Something went wrong on the SQL request'});
    }
  });
export default router;