import {fromJS} from 'immutable';
const defaultState = fromJS({
    topicList: [],
    articleList:[],
    writerList:[],
    articlePage:1
});
export default(state = defaultState,action) => {
    switch(action.type){
        case 'change_home_data':
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                writerList:fromJS(action.writerList)
            })
        case 'add_article_list':
            return state.merge({
                'articleList':state.get('articleList').concat(action.list),
                'articlePage':action.nextPage
            })
        default:
            return state;
    }
}