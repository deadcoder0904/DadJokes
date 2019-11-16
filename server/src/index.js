const { GraphQLServer } = require('graphql-yoga')
const {
  makeSchema,
  objectType,
  queryType,
  mutationType,
  idArg,
  stringArg,
} = require('nexus')
const { Photon } = require('@generated/photon')
const { nexusPrismaPlugin } = require('nexus-prisma')

const Joke = objectType({
  name: 'Joke',
  definition(t) {
    t.model.id()
    t.model.joke()
  },
})

const Query = queryType({
  definition(t) {
    t.crud.joke()
    t.crud.jokes()
  },
})

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneJoke({ alias: 'createJoke' })
    t.crud.deleteOneJoke({ alias: 'deleteJoke' })
  },
})

const photon = new Photon()

new GraphQLServer({
  schema: makeSchema({
    types: [Query, Mutation, Joke],
    plugins: [nexusPrismaPlugin()],
  }),
  context: { photon },
}).start(() =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql#5-using-the-graphql-api`,
  ),
)

module.exports = { Joke }
