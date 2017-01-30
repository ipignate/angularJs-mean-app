import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';

let router = express.Router();

// GET animals
router.get('/', (req, res) => {
  database.db.collection('zoo').find().toArray().then((animals)=>{
    res.json(animals);
  })
});

// GET one animal
router.get('/:id', (req, res) => {
  let animalId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('zoo').findOne({_id: animalId}).then((animal)=>{
    res.json(animal);
  })
});

// SAVE (add or edit)
router.post('/', (req, res) => {
  let animal = req.body;
  animal._id = new mongodb.ObjectID(req.body._id);
  database.db.collection('zoo').save(req.body).then((newAnimal)=>{
    res.json(newAnimal);
  })
});

//Delete one animal
router.delete('/:id', (req, res) => {
  let animalId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('zoo').remove({_id: animalId}).then(()=>{
    res.sendStatus(200);
  })
});


export default router;
