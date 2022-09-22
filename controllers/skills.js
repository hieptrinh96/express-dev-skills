import { Skill } from '../models/skill.js'
function index(req, res) {
  // Skill.find({}) will find all documents in a model 
  Skill.find({})
    // once you find all the documents, 
    .then(skills => {
      res.render('skills/index', {
        skills: skills
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body)
    .then(skill => {
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}

function show(req, res) {
  Skill.findById(req.params.id)
    .then(skill => {
      res.render('skills/show', {
        skill: skill
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/')
    })
}

export {
  index,
  newSkill as new,
  create,
  show,
} 