const User = require("./User");

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_: any, { id }: { id: any }) => User.findById(id),
  },

  Mutation: {
    createUser: (_: any, { name, email }: { name: any; email: any }) =>
      User.create({ name, email }),
  },
};

export {};
