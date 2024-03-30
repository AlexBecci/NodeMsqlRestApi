import { Router } from "express";
import { createEmployee, deleteEmployee, getEmployee, updateEmployee, } from "../controllers/employees.controller.js";


const router = Router();

router.get('/employees', getEmployee)
router.post('/employees', createEmployee)
router.put('/employees', updateEmployee)
router.delete('/employees', deleteEmployee)



export default router