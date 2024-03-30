//version vieja
/* const express = require('express') */
//nuevo 
import express from 'express'
//pool
import employeesRoutes from "./routes/employees.routes.js"
import indexRoutes from "./routes/index.routes.js"


const app = express();

app.use(express.json())

app.use(indexRoutes)
app.use(employeesRoutes)


app.listen(3000)
console.log('Server running on port 3000')
