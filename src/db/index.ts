const mongoose = require("mongoose")
const fastifyMongoDB = require("fastify-mongoose-driver").plugin;

const uri = `mongodb+srv://ian:${process.env.DB_PASSWORD}@cluster0.yxvmn.mongodb.net/guest?retryWrites=true&w=majority`;

async function dbConnector(fastify: any, options: any) {
  fastify.register(fastifyMongoDB, {
    uri,
    settings: {
      useNewUrlParser: true,
      config: {
        autoIndex: true,
      },
    },
  },  
  (err: any) => {
    if (err) throw err;
  })
}

module.exports = dbConnector;