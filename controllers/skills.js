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

export { index } 