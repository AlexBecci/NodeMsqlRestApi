import { Router } from "express";
import { createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee, } from "../controllers/employees.controller.js";


const router = Router();

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployee)
router.put('/employees', updateEmployee)
router.delete('/employees', deleteEmployee)



export default router