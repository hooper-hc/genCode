export default {
    FETCH_SINGLE_GALAXY_REQUEST: action => ({
        query: `query ($id:ID!) {
            galaxyById (id:$id) {
                _id,
                meta {
                    createdBy {
                        _id,
                        name
                    },
                    createdOn
                },
                editors,
                avatar,
                theme {
                    _id,
                    name,
                },
                constellations {
                    _id,
                    name,
                },
                trustRequired
            }
        }`,
        variables: {
            id: action.id,
        },
    }),
    // FETCH_USER_GALAXIES_REQUEST: action => ({
    //     query: `query ($id:ID!) {
    //       userGalaxies (id:$id) {
    //         _id,
    //         meta {
    //             createdBy {
    //                 _id,
    //                 name
    //             },
    //             createdOn
    //         },
    //         avatar,
    //         theme {
    //             name,
    //         },
    //         constellations {
    //             _id,
    //             name,
    //         },
    //         trustRequired
    //       }
    //     }`,
    //     variables: {
    //         id: action.id,
    //     },
    // }),
    FETCH_ALL_GALAXIES_REQUEST: action => ({
        query: `query {
            allGalaxies {
                _id,
                meta {
                    createdBy {
                        _id,
                        name
                    },
                    createdOn
                },
                avatar,
                theme {
                    name,
                },
                constellations {
                    _id,
                    name,
                },
                trustRequired
            }
        }`,
    }),
    CREATE_GALAXY_REQUEST: action => ({
        query: `mutation ($data:GalaxyInput!) {
            createGalaxy (data:$data)
        }`,
        variables: {
            data: action.data,
        },
    }),
    EDIT_GALAXY_REQUEST: action => ({
        query: `mutation ($data:GalaxyInput!, $id:ID!) {
            editGalaxy (data:$data, id:$id)
        }`,
        variables: {
            id: action.id,
            data: action.data,
        },
    }),
    DELETE_GALAXY_REQUEST: action => ({
        query: `query ($id:ID!) {
            deleteGalaxy
        }`,
        variables: {
            id: action.id,
        },
    }),
};
