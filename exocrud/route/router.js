const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get("/", controller.getAllBks);
router.get("/available", controller.getAllAvalable);
router.get("/genre", controller.getAllGenre);

router.get("/:id", controller.getById);

router.put("/:id", controller.C_updateBook);
router.delete("/:id", controller.deleteBook);

router.post("/", controller.AddBook);


module.exports=router;