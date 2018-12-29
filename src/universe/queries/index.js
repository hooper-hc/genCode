export default {
    FETCH_HYPERNODE_REQUEST: action => ({
        query: `query ($id:ID!) {
            realitiesInHypernode (id:$id) {
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
            }
        }`,
        variables: {
            id: action.id,
        },
    }),
    FETCH_ALL_REALITIES_REQUEST: action => ({
        query: `query {
            allRealities {
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
            }
        }`,
    }),
    // LIST_HYPERNODE_CONSTELLATIONS_REQUEST: action => ({

    // }),
    CREATE_REALITY_REQUEST: action => ({
        query: `mutation ($data:RealityInput!) {
            createReality (data:$data)
        }`,
        variables: {
            data: action.data,
        },
    }),
    EDIT_REALITY_REQUEST: action => ({
        query: `mutation ($data:RealityInput!, $id:ID!) {
            editReality (data:$data, id:$id)
        }`,
        variables: {
            id: action.id,
            data: action.data,
        },
    }),
    DELETE_REALITY_REQUEST: action => ({
        query: `query ($id:ID!) {
            deleteReality
        }`,
        variables: {
            id: action.id,
        },
    }),
    // ATTACH_REALITIES_REQUEST: action => ({

    // }),
};
