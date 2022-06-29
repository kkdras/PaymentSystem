import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {}


let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

clientPromise = new MongoClient(uri, options)

export default clientPromise

