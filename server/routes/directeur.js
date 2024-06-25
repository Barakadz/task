import express from "express";
import {  AddDirecteur,DeleteDirecteur,UpdateDirecteur,Directeur,getByIdDirecteur} from "../controllers/directeur.js";

const router = express.Router()

 
router.post("/add", AddDirecteur)
router.delete("/:id", DeleteDirecteur)
router.put("/:id", UpdateDirecteur)
router.get("/", Directeur)
router.get("/:id", getByIdDirecteur)


export default router