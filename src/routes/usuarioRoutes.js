import express from 'express';
import UsuarioController from '../controllers/usuarioControllers.js';

const router = express.Router();

router
.get("/usuarios", UsuarioController.buscarUsuarios)
// .get("/usuario/:id", UsuarioController.buscarUsuarioPorId)
.post("/usuario/login", UsuarioController.loginUsuario)
.post("/usuario/cadastrar", UsuarioController.cadastrarUsuario)


export default router;
