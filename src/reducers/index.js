
const initState = {
    articles: []
};

function rootReducer(state = initState, action) {
    if (action.type === 'ADD_ARTICLE') {
        return {
            ...state,
            articles: state.articles.concat(action.payload)
        };
    }
    return state;
}

export default rootReducer;