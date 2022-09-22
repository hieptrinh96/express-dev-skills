import { Skill } from '../models/skill.js'

function index(req, res) {
  console.log(req.time)
  // Skill.find({}) will find all documents in a model 
  Skill.find({})
    // once you find all the documents, 
    .then(skills => {
      res.render('skills/index', {
        skills: skills,
        time: req.time
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

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
    .then(skill => {
      res.redirect('/skills')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
}

function edit(req, res) {
  Skill.findById(req.params.id)
    .then(skill => {
      res.render('skills/edit', {
        skill: skill
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/todos')
    })
}

function update(req, res) {
  req.body.weakness = !!req.body.weakness
  Skill.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(skill => {
      res.redirect(`/skills/${skill._id}`)
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
}

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  update
}
