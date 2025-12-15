const express = require('express');


let books = [
  {
    id: 1,
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee_publication: 1943,
    genre: "FICTION",
    disponible: false,
  },
  {
    id: 2,
    titre: "Le grand Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee_publication: 1943,
    genre: "Conte philosophique",
    disponible: true,
  },
  {
    id: 3,
    titre: "Le Prince du milieux",
    auteur: "Antoine de Saint-Exupéry",
    annee_publication: 1943,
    genre: "FICTION",
    disponible: true,
  },
  {
    id: 3,
    titre: "hjkjkghjk",
    auteur: "Antoine defvghbnj,k",
    annee_publication: 2025,
    genre: "Policier",
    disponible: true,
  },
];

let nextId = 4;

const getAll = () => {
    return books;
};
const getAllAvalable = () => {
  const booksAv=books.filter((b)=> b.disponible==true);
    return booksAv;
};

const getAllGenre = (genre) => {
  const booksAv = books.filter((b)=> b.genre == genre);
  return booksAv;
};

const getById = (id) => {
  const bookInd = books.find((b) => b.id === parseInt(id));
  if (bookInd != undefined) {
    return bookInd;
  }
  throw RangeError("index non trouver");
};

const updateBook = (id, name, aut, ann, gen) => {
  const bookInd = books.findIndex((b) => b.id === parseInt(id));
  
  book = books[bookInd];
  book.titre=name;
  book.auteur=aut;
  book.annee_publication=ann;
  book.genre=gen;

  books[bookInd]=book;
  return book;

};


const addBook=(name,aut,ann,gen)=>{
    newbook ={
    id: nextId++,
    titre: name,
    auteur: aut,
    annee_publication: ann,
    genre: gen,
    disponible: true,
  }
  books.push(newbook);
  return newbook;
}

const deleteBook=(id)=>{

    const index = books.findIndex((c) => c.id === parseInt(id));
    if (index === -1) {
      throw RangeError("index non trouver");
    }
    books.splice(index,1);
    return books;
}

module.exports = {
  getAll,
  getById,
  updateBook,
  addBook,
  deleteBook,
  getAllAvalable,
  getAllGenre,
};