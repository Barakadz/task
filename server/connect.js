import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"harry",
    password:"MyStrongPassword1234$",
    database:"task"  
      })