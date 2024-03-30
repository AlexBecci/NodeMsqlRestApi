import { pool } from "../db.js";

//GET ALL
export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
}
//GET BY ID
export const getEmployee = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id= ?', [req.params.id])
    if (rows.length <= 0) {
        return res.status(404).json({
            message: 'Employee not found'
        })
    }
    res.json(rows[0])
}
//CREATE
export const createEmployee = async (req, res) => {
    const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee(name,salary) VALUES (?,?)', [name, salary]);
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}
//UPDATE
export const updateEmployee = (req, res) => res.send('actualizando empleados')
//DELETE 
export const deleteEmployee = async (req, res) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id= ?', [req.params.id])
    if (result.affectedRows <= 0) {
        return res.status(404).json({
            message: 'Employee not found'
        })
    }
    res.sendStatus(204)
}