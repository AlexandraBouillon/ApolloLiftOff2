const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        // tracksForHome: (parent, args, context, info) => {},

        // get all tracks, will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, {dataSources}) => {}
    }
};
module.exports = resolvers;
