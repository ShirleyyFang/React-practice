import React,{Component} from 'react';
import { connect } from 'react-redux';
import Topics from './components/Topics';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './styled';

class Home extends Component {
    handleScrollTop(){
        window.scrollTo(0,0)
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className = 'banner-img' src="https://static.lieyunwang.com/upload2/file/201808/061055cp25ah.jpg"></img>
                    <Topics />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = {
                type:'change_home_data',
                topicList:result.topicList,
                articleList:result.articleList,
                writerList:result.writerList
            }
            dispatch(action);
        })
    }
});
export default connect(null,mapDispatch)(Home);