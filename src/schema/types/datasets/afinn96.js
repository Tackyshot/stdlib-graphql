const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt} = require('graphql');
const datasets = require('@stdlib/datasets');

const typeName = 'Afinn96';

module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({

  })
});
