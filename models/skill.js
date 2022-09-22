// models are singular in naming
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  power: String,
  weakness: Boolean,
  ranking: Number
})

// compile the schema into a model and export it 
const Skill = mongoose.model('Skill', skillSchema)

export { Skill } 