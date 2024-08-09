export const initialState = {
    id: '',
    avatar: '',
    name: '',
    email: '',
    favorites: [],
    appointments: []
};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setProfile':
            return {
                ...state,
                id: action.payload.id,
                avatar: action.payload.avatar,
                name: action.payload.name,
                email: action.payload.email
            };
            break;
        default:
            return state;
    }
}