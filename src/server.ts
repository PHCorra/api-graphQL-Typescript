import { GraphQLServer } from "graphql-yoga";
const path = require("path");
import * as resolvers from "./resolvers";
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/graphqlnode", {
  useNewUrlParser: true,
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "../src/schema.graphql"),
  resolvers,
});

server.start();
