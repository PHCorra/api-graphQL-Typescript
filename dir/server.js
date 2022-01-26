"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/graphqlnode", {
    useNewUrlParser: true,
});
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs: path.resolve(__dirname, "../src/schema.graphql"),
    resolvers,
});
server.start();
