const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLID
} = require('graphql');
const datasets = require('@stdlib/datasets');


const NapoleonArmyType = new GraphQLObjectType({
  name: "NapoleonArmyType",
  fields: () => ({
    long: {type: GraphQLFloat},
    lat: {type: GraphQLFloat},
    size: {type: GraphQLInt},
    direction: {type: GraphQLString},
    division: {type: GraphQLInt},
  })
});

const NapoleonCitiesType = new GraphQLObjectType({
  name: "NapoleonCitiesType",
  fields: ()=> ({
    long: {type: GraphQLFloat},
    lat: {type: GraphQLFloat},
    city: {type: GraphQLString}
  })
});

const NapoleonLabelsType = new GraphQLObjectType({
  name: "NapoleonLabelsType",
  fields: ()=>({
    long: {type: GraphQLFloat},
    lat: {type: GraphQLFloat},
    size: {type: GraphQLInt},
    division: {type: GraphQLInt},
  })
});

const NapoleonTemperatureType = new GraphQLObjectType({
  name: "NapoleonTemperaturesType",
  fields: ()=>({
    long: {type: GraphQLFloat},
    temp: {type: GraphQLInt},
    date: {type: GraphQLString}
  })
});

const RiverPropertiesType = new GraphQLObjectType({
  name: "RiverPropertiesType",
  fields: () => ({
    id: {type: GraphQLID},
    wso_id: {type: GraphQLID},
    objectid: {type: GraphQLID},
    featurecla: {type: GraphQLString},
    scalerank: {type: GraphQLInt},
    rivernum: {type: GraphQLInt},
    dissolve: {type: GraphQLString},
    name: {type: GraphQLString},
  })
});

const RiverGeometryType = new GraphQLObjectType({
  name: "RiverGeometryType",
  fields: ()=>({
    type: GraphQLString,
    coordinates: new GraphQLList(GraphQLFloat)
  })
});

const RiverFeaturesType = new GraphQLObjectType({
  name: "RiverFeaturesType",
  fields: ()=>({
    type: {type: GraphQLString},
    properties: {type: RiverPropertiesType},
    geometry: {type: RiverGeometryType}
  })
});

const NapoleonRiversType = new GraphQLObjectType({
  name: "NapoleonRiversType",
  fields: ()=>({
    type: {type: GraphQLString},
    features: {type: new GraphQLList(RiverFeaturesType)},
  })
});


const typeName = 'MinardNapoleonsMarch';

module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({
    army: {type: NapoleonArmyType},
    cities: {type: NapoleonCitiesType},
    labels: {type: NapoleonLabelsType},
    temperature: {type: NapoleonTemperatureType},
    rivers: {type: NapoleonRiversType},
  })
});
