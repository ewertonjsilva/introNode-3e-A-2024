const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const PedidosController = require('../controllers/pedidos');
const ProdutosController = require('../controllers/produtos');

// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch('/usuarios', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

router.get('/pedidos', PedidosController.listarPedidos); 
router.post('/pedidos', PedidosController.cadastrarPedidos); 
router.patch('/pedidos', PedidosController.editarPedidos); 
router.delete('/pedidos', PedidosController.apagarPedidos); 

router.get('/produtos', ProdutosController.listarProdutos); 
router.post('/produtos', ProdutosController.cadastrarProdutos); 
router.patch('/produtos', ProdutosController.editarProdutos); 
router.delete('/produtos', ProdutosController.apagarProdutos); 


module.exports = router;

