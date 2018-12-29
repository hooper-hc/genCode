export default {
    FETCH_SINGLE_CONSTELLATION_REQUEST: action => ({
        query: `query ($id:ID!) {
            constellationById (id:$id) {
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
                trees {
                    _id,
                    name,
                },
                trustedBy {
                    _id,
                    name,
                },
                theme {
                    _id,
                    name,
                },
                nodes {
                    _id,
                    meta {
                        createdBy {
                            _id,
                            name
                        },
                        createdOn
                    },
                    typeP,
                    typeL,
                    typeT,
                    hypernode,
                    nodeType,
                    name,
                    language,
                    temporal,
                    description,
                    geotags,
                    image
                },
                edges {
                    toId,
                    fromId,
                    description,
                    documentation
                },
                trustRequired
            }
        }`,
        variables: {
            id: action.id,
        },
    }),
    FETCH_ALL_CONSTELLATIONS_REQUEST: action => ({
        query: `query {
            allConstellations {
                _id,
                editors,
                avatar,
                theme {
                    name,
                },
                nodes {
                    _id,
                },
                trustRequired
            }
        }`,
    }),
    FETCH_USER_CONSTELLATIONS_REQUEST: action => ({
        query: `query ($id:ID!) {
            userConstellations (id:$id) {
                _id,
                editors,
                avatar,
                theme {
                    name,
                },
                nodes {
                    _id,
                },
                trustRequired
            }
        }`,
        variables: {
            user: action.user,
        },
    }),
    CREATE_CONSTELLATION_REQUEST: action => ({
        query: `mutation ($data:ConstellationInput!) {
            createConstellation (data:$data)
        }`,
        variables: {
            data: action.data,
        },
    }),
    EDIT_CONSTELLATION_REQUEST: action => ({
        query: `mutation ($data:ConstellationInput!, $id:ID!) {
            editConstellation (data:$data, id:$id)
        }`,
        variables: {
            id: action.id,
            data: action.data,
        },
    }),
    DELETE_CONSTELLATION_REQUEST: action => ({
        query: `query ($id:ID!) {
            deleteConstellation
        }`,
        variables: {
            id: action.id,
        },
    }),
};
