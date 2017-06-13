const express = require('express');
const queries = require('../db/queries');

const router = express.Router();

function isValidId(req, res, next){
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validIdea(submission){
  const hasTitle = typeof submission.title == 'string' && submission.title.trim() !== '';
  const hasIdea = typeof submission.idea == 'string' && submission.idea.trim() !== '';
  return hasTitle && hasIdea;
}

function isValidRating(submission) {
  // console.log(submission.rating)
  // console.log(submission.rating == /^(\d?[1-9]|0)$/)
  // return submission.rating == /^(\d?[1-9]|0)$/;
  if (submission.rating < 0 || submission.rating > 10) {
    return false
  }
  return true;
}

// console.log(validIdea({title: "test", idea:"testIdea"}))

router.get('/', (req, res)=>{
  if (req.query.author !== undefined){
    queries.getByAuthor(req.query.author).then(ideas =>{
      res.json(ideas);
  })
}
  else{
    queries.getAll().then(ideas =>{
      res.json(ideas);
  })
}
});

router.get('/:id', isValidId, (req, res) => {
  let idQuery = req.params.id;
  queries.getOne(idQuery).then(idea => {
    res.json(idea);
  })
})

router.post('/', (req, res, next) => {
  if (validIdea(req.body)) {
    queries.create(req.body).then(ideas => {
      res.json(ideas[0]);
    })
  }
  else {
    next(new Error('Invalid Submission.'))
  }
})

router.put('/:id', isValidId, (req, res, next) => {
  if(isValidRating(req.body) == true){
    queries.updateRating(req.params.id, req.body.rating). then(ideas =>{
      res.json(ideas[0]);
    })
  }
  else{
    next(new Error('Invalid Submission.'))
  }
})

router.delete('/:id', isValidId, (req, res) =>{
  queries.delete(req.params.id). then( () =>{
    res.json('Deleted');
  })
})


module.exports = router;
