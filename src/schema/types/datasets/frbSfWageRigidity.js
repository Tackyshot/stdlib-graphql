const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} = require('graphql');
const datasets = require('@stdlib/datasets');

const typeName = 'FrbWageRigidity';

module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({
    date: {type: GraphQLString},                       //collection date (month/day/year; e.g., 01/01/1980).
    all_workers: {type: GraphQLFloat },                //wage rates for hourly and non-hourly workers.
    hourly_workers: {type: GraphQLFloat },             //wage rates for hourly workers.
    non_hourly_workers: {type: GraphQLFloat },         //wage rates for non-hourly workers.
    less_than_high_school: {type: GraphQLFloat },      //wage rates for workers with less than a high school education.
    high_school: {type: GraphQLFloat },                //wage rates for workers with a high school education.
    some_college: {type: GraphQLFloat },               //wage rates for workers with some college education.
    college: {type: GraphQLFloat },                    //wage rates for workers with a college education.
    construction: {type: GraphQLFloat },               //wage rates for workers in the construction industry.
    finance: {type: GraphQLFloat },                    //wage rates for workers in the finance industry.
    manufacturing: {type: GraphQLFloat },              //wage rates for workers in the manufacturing industry.
  })
});
