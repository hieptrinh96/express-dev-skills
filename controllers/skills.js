import { skills } from '../data/skill-data.js'
function index() {
  res.render('skills/index', {
    skills: skills
  })
}

export { index } 