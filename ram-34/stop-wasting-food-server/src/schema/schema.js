// GraphQl Schema for future implementation
//Currenly used to populate the roles table

const graphql = require("graphql");
const User = require("../models/user");
const Role = require("../models/role");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const auth = require("../auth/middleware");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    roleId: {
      type: RoleType,
      resolve(parent, args) {
        //console.log("checking parent", parent);
        return Role.findByPk(parent.roleId);
      }
    },
    token: { type: GraphQLString }
  })
});

const RoleType = new GraphQLObjectType({
  name: "Role",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.findAll({ where: { roleId: parent.dataValues.id } });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      async resolve(parent, args) {
        // return User.findByPk(args.id);
        if (!args.email || !args.password) {
          return "Missing email or password in request body";
        }
        const user = await User.findOne({ where: { email: args.email } });

        const passwordValid = bcrypt.compareSync(args.password, user.password);
        if (passwordValid) {
          const token = toJWT({ id: user.id });
          //console.log("checking token", token);
          return { ...user.dataValues, token };
        } else {
          return "Invalid credential";
        }
      }
    },
    role: {
      type: RoleType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Role.findByPk(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addRole: {
      type: RoleType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        //  console.log("checking args", args);
        return Role.create(args)
          .then(res => res)
          .catch(err => Promise.reject(err));
        //console.log("checking parent", parent);
      }
    },
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        roleId: { type: GraphQLID }
      },
      resolve(parent, args) {
        //console.log("checking args", args);
        const hashedPassword = bcrypt.hashSync(args.password, 10);
        return User.create({
          ...args,
          password: hashedPassword
        })
          .then(res => res)
          .catch(err => Promise.reject(err));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
