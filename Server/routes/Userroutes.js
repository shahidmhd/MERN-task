import express from 'express';
import { addData, deleteData, editData, getAllData } from '../Controller/Datacontroller.js';

const router = express.Router();

// Chainable route handler for '/data'
router.route('/data')
  .get(getAllData)    // GET all data

  .post(addData);      // POST new data


// Chainable route handler for '/data/:id'
router.route('/data/:id')
  .put(editData)       // PUT update data
  
  .delete(deleteData); // DELETE data

export default router;
