'use strict';
const fs = require('fs');
const {GraphQLSchema, GraphQLString, GraphQLObjectType, GraphQLID, GraphQLList} = require('graphql');
const TypeBuilder = require('./type');


//import types
class SchemaFactory {
  constructor (){
    // this.queriesPath = `${__dirname}/queries`;
    // this.mutationsPath = `${__dirname}/mutations`;
    // this.queryFiles = fs.readdirSync(this.queriesPath);
    // this.mutationFiles = fs.readdirSync(this.mutationsPath);
    this.schema = this.buildSchema();

    console.log('SCHEMA!');
    console.log(this.schema);

  }//end constructor

  getSchema (){
    return this.schema;
  }//end getSchema

  buildSchema (){
    return new GraphQLSchema({
      query: this.buildQueries(this.queryFiles)
    });
  }//end buildSchema

  buildQueries (files){
    const fields = this.buildFields();

    const RootQueryType = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {}
    });

    return RootQueryType;
  }//end buildQueries

  buildFields (){
    let types = new TypeBuilder().buildTypes();
    
    console.log('TYPES:');
    console.log(types.body[0]);

    return types;

    //todo replace this with program
    // return {
    //   getEndpoints: {
    //     type: new GraphQLList(EndpointType),
    //     resolve: (parent, args) => {
    //       console.log('mENDPOINTS TO RETURN:');
    //
    //       return mEndpoints;
    //     }
    //   },
    //   getEndpoint: {
    //     type: EndpointType,
    //     args: {id: {type: GraphQLID}},
    //     resolve: (parent, args) => {
    //       //todo: replace with mongo queries.
    //       let endpoint = mEndpoints.find((a) => {
    //         return a.id == args.id;
    //       });
    //
    //       console.log('FIND Endpoint BY ID:', args.id);
    //       // console.log(endpoint);
    //
    //       return endpoint
    //     }
    //   },
    //   getIntegrations:{
    //     type: new GraphQLList(IntegrationType),
    //     resolve: () => {
    //       return mIntegrations;
    //     }
    //   },
    //   getIntegration:{
    //     type: IntegrationType,
    //     args: {id: {type: GraphQLID}},
    //     resolve: (parent, args) => {
    //       let integration = mIntegrations.find((a) => {
    //         return a.id == args.id;
    //       });
    //
    //       console.log('FIND INTEGRATION BY ID:', args.id);
    //       // console.log(integration);
    //
    //       return integration;
    //     }
    //   }
    // }
  }//end buildFields

}
module.exports = SchemaFactory;