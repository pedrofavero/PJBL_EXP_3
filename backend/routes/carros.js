import express from "express";
import carroController from "../controllers/carrosController.js";
const router = express.Router();



router.get('/', carroController.listar);
// router.get('/:id', 'buscarPorId');
// router.post('/', 'criar');
// router.put('/:id', 'atualizar');
// router.delete('/:id', 'deletar');

export default router;
