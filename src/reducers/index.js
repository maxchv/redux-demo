
const initState = {
    articles: []
};

function rootReducer(state = initState, action) {
    if (action.type === 'ADD_ARTICLE') {
        const article = { ...action.payload };
        if (article.id === undefined) {
            article.id = state.articles.length + 1;
        }
        return {
            ...state,
            articles: state.articles.concat(article)
        };
    }
    return state;
}

export default rootReducer;