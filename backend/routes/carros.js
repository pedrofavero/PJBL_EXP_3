import express from "express";
import carroController from "../controllers/carrosController.js";
const router = express.Router();



router.get('/', carroController.listar);
router.get('/:id', carroController.buscarPorId);
router.post('/', carroController.criar);
router.put('/:id', carroController.atualizar);
router.delete('/:id', carroController.deletar);

export default router;
