import express from "express";
import { addEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee } from "../controller/employeeController.js";

const router = express.Router();

router.post('/', addEmployee);
router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;
