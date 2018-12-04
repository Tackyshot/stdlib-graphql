const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID
} = require('graphql');
const datasets = require('@stdlib/datasets');

const typeName = 'FrbWageRigidity';

module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({
    chapter: {type: GraphQLID},
    title: {type: GraphQLString},
    text: {type: GraphQLString}
  })
});
