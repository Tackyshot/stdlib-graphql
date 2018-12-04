const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt} = require('graphql');
const datasets = require('@stdlib/datasets');

//import subtypes here
const FrbSfWageRigidityType = require('./frbSfWageRigidity');
const MinardNapoleonsMarchType = require('./minardNapoleonsMarch');
const MobyDickType = require('./mobyDick');

const typeName = 'datasets';
module.exports.typeName =  typeName;
module.exports = new GraphQLObjectType({
  name: typeName,
  fields: () => ({
    "afinn-111": {
      type: new GraphQLList(new GraphQLList(GraphQLString)), //todo: correct for [ ["str", 0], ... ] type
      resolve: () => {
          return datasets('AFINN_111');
      }
    },
    "afinn-96": {
      type: new GraphQLList(new GraphQLList(GraphQLString)), //todo: correct for [ ["str", 0], ... ] type
      resolve: () => {
          return datasets('AFINN_96');
      }
    },
    "anscombes-quartet": {
      type: new GraphQLList(new GraphQLList(new GraphQLList(GraphQLInt))), //todo: correct for [ [ [Int, Float], ...], [...] ] type
      resolve: () => {
          return datasets('ANSCOMBES_QUARTET');
      }
    },
    "dale-chall-new": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('DALE_CHALL_NEW');
      }
    },
    "female-first-names-en": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('FEMALE_FIRST_NAMES_EN');
      }
    },
    "frb-sf-wage-rigidity": {
      type: new GraphQLList(FrbSfWageRigidityType),
      resolve: ()=>{
        return datasets('FRB_SF_WAGE_RIGIDITY');
      }
    },
    "img-acanthus-mollis": {
      type: GraphQLString,
      resolve: ()=>{
        return datasets('IMG_ACANTHUS_MOLLIS').toString('base64');
      }
    },
    "img-airplane-from-above": {
      type: GraphQLString,
      resolve: ()=>{
        return datasets('IMG_AIRPLANE_FROM_ABOVE').toString('base64');
      }
    },
    "img-allium-oreophilum": {
      type: GraphQLString,
      resolve: ()=>{
        return datasets('IMG_ALLIUM_OREOPHILUM').toString('base64');
      }
    },
    "img-black-canyon": {
      type: GraphQLString,
      resolve: ()=>{
        return datasets('IMG_BLACK_CANYON').toString('base64');
      }
    },
    "img-dust-bowl-home": {
      type: GraphQLString,
      resolve: ()=>{
        return datasets('IMG_DUST_BOWL_HOME').toString('base64');
      }
    },
    "img-french-alpine-landscape": {
      type: GraphQLString,
      resolve: ()=>{
        return datasets('IMG_FRENCH_ALPINE_LANDSCAPE')().toString('base64');
      }
    },
    "img-locomotion-house-cat": {
      type: GraphQLString,
      resolve: ()=>{
        return datasets('IMG_LOCOMOTION_HOUSE_CAT').toString('base64');
      }
    },
    "img-locomotion-nude-male": {
      type: GraphQLString,
      resolve: ()=>{
        return datasets('IMG_LOCOMOTION_NUDE_MALE').toString('base64');
      }
    },
    "img-march-pastoral": {
      type: GraphQLString,
      resolve: ()=>{
        return datasets('IMG_MARCH_PASTORAL').toString('base64');
      }
    },
    "img-nagasaki-boats": {
      type: GraphQLString,
      resolve: ()=>{
        return datasets('IMG_NAGASAKI_BOATS').toString('base64');
      }
    },
    "liu-negative-opinion-words-en": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('LIU_NEGATIVE_OPINION_WORDS');
      }
    },
    "liu-positive-opinion-words-en": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('LIU_POSITIVE_OPINION_WORDS');
      }
    },
    "male-first-names-en": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('MALE_FIRST_NAMES_EN');
      }
    },
    "minard-napoleons-march": {
      type: new GraphQLList(MinardNapoleonsMarchType),
      args: {data: {type: GraphQLString}},
      resolve: (parent, args)=>{
        let data = !!args.data ? args.data : null;

        return datasets('MINARD_NAPOLEONS_MARCH', data);
      }
    },
    "moby-dick": {
      type: new GraphQLList(MobyDickType),
      resolve: ()=>{
        return datasets('MOBY_DICK');
      }
    },
    "month-names-en": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('MONTH_NAMES_EN');
      }
    },
    "nightingales-rose": {
      type: new GraphQLList(GraphQLObjectType),
      resolve: ()=>{
        return datasets('NIGHTINGALES_ROSE');
      }
    },
    "savoy-stopwords-fin": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('SAVOY_STOPWORDS_FIN');
      }
    },
    "savoy-stopwords-fr": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('SAVOY_STOPWORDS_FR');
      }
    },
    "savoy-stopwords-ger": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('SAVOY_STOPWORDS_GER');
      }
    },
    "savoy-stopwords-it": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('SAVOY_STOPWORDS_IT');
      }
    },
    "savoy-stopwords-por": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('SAVOY_STOPWORDS_POR');
      }
    },
    "savoy-stopwords-sp": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('SAVOY_STOPWORDS_SP');
      }
    },
    "savoy-stopwords-swe": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('SAVOY_STOPWORDS_SWE');
      }
    },
    "sotu": {
      type: new GraphQLList(GraphQLObjectType), //todo: add custom type here
      args: {
        name: new GraphQLList(GraphQLString),
        party: new GraphQLList(GraphQLString),
        year: new GraphQLList(GraphQLInt),
        range: new GraphQLList(GraphQLInt)
      },
      resolve: (parent, args)=>{
        //todo: clean args for proper format.

        return datasets('SOTU', args);
      }
    },
    "spache-revised": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('SPACHE_REVISED');
      }
    },
    "spam-assassin": {
      type: new GraphQLList(GraphQLObjectType), //todo add custom type here
      resolve: ()=>{
        return datasets('SPAM_ASSASSIN');
      }
    },
    "stopwords-en": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('STOPWORDS_EN');
      }
    },
    "us-states-abbr": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('US_STATES_ABBR');
      }
    },
    "us-states-capitals": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('US_STATES_CAPITALS');
      }
    },
    "us-states-capitals-names": {
      type: GraphQLObjectType,
      resolve: ()=>{
        return datasets('US_STATES_CAPITALS_NAMES');
      }
    },
    "us-states-names": {
      type: new GraphQLList(GraphQLString),
      resolve: ()=>{
        return datasets('US_STATES_NAMES')
      }
    },
    "us-states-names-capitals": {
      type: GraphQLObjectType,
      resolve: ()=>{
        return datasets('US_STATES_NAMES_CAPITALS');
      }
    },
  })
});
