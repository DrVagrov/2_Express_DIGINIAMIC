const express = require("express");
const service = require('../service/service');

function getAllBks(req,res)
{
    try {
            const books = service.getAll();
            res.status(200).json({
              success: true,
              data: books,
              count: books.length,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Erreur lors de la récupération des livres',
                error: error.message
            });
        }
}
async function getById (req, res) {
  try {
    
    const book =await service.getById(req.params.id);
    console.log(JSON.stringify(book));
    res.status(200).json({
      success: true,
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des livres",
      error: error.message,
    });
  }
}
async function getAllAvalable(req,res)
{
  try {
    const books = service.getAllAvalable();
    res.status(200).json({
      success: true,
      data: books,
      count: books.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des livres",
      error: error.message,
    });
  }
}
async function getAllGenre(req,res) {
  try {
    const genre= req.query.query;
    const books = service.getAllGenre(genre);
    res.status(200).json({
      success: true,
      data: books,
      count: books.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la récupération des livres",
      error: error.message,
    });
  }
}

const C_updateBook = (req, res) => {
  try {
    const { name, aut, annPub, genre } = req.body;
    const book = service.updateBook(req.params.id,name, aut, annPub, genre);
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la mise a jour du livre ${req.params.id}`,
      error: error.message,
    });
  }
};

const AddBook=(req, res) =>{
  try {
    const {name,aut,annPub,genre}=req.body;
    const book = service.addBook(name,aut,annPub,genre);
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'ajoute d'un livre",
      error: error.message,
    });
  }
}
async function deleteBook(req, res) {
  try {
    const book = await service.deleteBook(req.params.id);
    res.status(200).json({
      success: true,
      message:`suppressions du livre a l'id : ${req.params.id}`,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la suppressions du livre id : ${req.params.id}`,
      error: error.message,
    });
  }
}



module.exports = {
  getAllBks,
  getById,
  C_updateBook,
  AddBook,
  deleteBook,
  getAllAvalable,
  getAllGenre,
};