const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        // tracksForHome: (parent, args, context, info) => {},

        // get all tracks, will be used to populate the homepage grid of our web client
        // args, parents, are not being used so we have underscores
        // dataSources is being destructure from the context
        // info is omitted, ALL params are optional
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        },
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }

};
module.exports = resolvers;
