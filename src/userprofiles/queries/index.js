export default {
    FETCH_USERS_REQUEST: action => ({
        query: `query {
            allUsers {
                _id,
                handle,
                bio,
                avatar,
                public,
                donate
            }
        }`,
    }),
    CREATE_USER_REQUEST: action => ({
        query: `mutation ($data:UserInput!) {
            createUser (data:$data)
        }`,
        variables: {
            data: action.user,
        },
    }),
    EDIT_USER_REQUEST: action => ({
        query: `mutation ($data:UserInput!) {
            editUser (data:$data)
        }`,
        variables: {
            data: action.user,
        },
    }),
    DELETE_USER_REQUEST: action => ({
        query: `mutation ($id:ID!) {
            deleteUser (id:$id)
        }`,
        variables: {
            data: {
                id: action.id,
            },
        },
    }),
    ADD_TRUST_REQUEST: action => ({
            query: `query ($from:ID!, $to:ID!) {
                addTrust (from:$from, to:$to)
            }`,
        variables: {
            from: action.from,
            to: action.to,
        },
    }),
    REMOVE_TRUST_REQUEST: action => ({
        query: `query ($id:ID!) {
                removeTrust (id:$id)
            }`,
        variables: {
            id: action.id,
        },
    }),
    ADD_WATCH_REQUEST: action => ({
            query: `query ($from:ID!, $to:ID!) {
                addWatch (from:$from, to:$to)
            }`,
        variables: {
            from: action.from,
            to: action.to,
        },
    }),
    REMOVE_WATCH_REQUEST: action => ({
        query: `query ($id:ID!) {
                removeWatch (id:$id)
            }`,
        variables: {
            id: action.id,
        },
    }),
    ADD_SUPPORT_REQUEST: action => ({
            query: `query ($from:ID!, $to:ID!) {
                addSupport (from:$from, to:$to)
            }`,
        variables: {
            from: action.from,
            to: action.to,
        },
    }),
    REMOVE_SUPPORT_REQUEST: action => ({
        query: `query ($id:ID!) {
                removeSupport (id:$id)
            }`,
        variables: {
            id: action.id,
        },
    }),
};
