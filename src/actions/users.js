export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USERS_SUCCESS: 'users/get_users_success',
};

export const GET_USERS_REQUEST = () => ({
    type: Types.GET_USERS_REQUEST,
});

// items - array of users
export const getUsersSuccess = ({items}) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
})