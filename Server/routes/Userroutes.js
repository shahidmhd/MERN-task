import express from 'express';
import { addData, deleteData, editData, getAllData, getAllDatapagination } from '../Controller/Datacontroller.js';

const router = express.Router();

// Chainable route handler for '/data'
router.route('/data')
  .get(getAllData)    // GET all data
  .post(addData);      // POST new data

// Chainable route handler for '/data'
router.route('/paginateddata')
  .get(getAllDatapagination)    // GET all paginated data


// Chainable route handler for '/data/:id'
router.route('/data/:id')
  .patch(editData)       // PUT update data
  .delete(deleteData); // DELETE data

export default router;
