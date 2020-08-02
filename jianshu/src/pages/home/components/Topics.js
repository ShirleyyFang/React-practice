import React,{Component} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper, TopicItem} from '../styled';

class Topics extends Component {
    render(){
        return (
            <TopicWrapper>
                {this.props.list.map((item)=>{
                    return (
                        <TopicItem key={item.get('id')}>
                            <img className = 'topic-pic'
                            src={item.get('imgUrl')}></img>
                            {item.get('title')}
                        </TopicItem>)
                })}
            </TopicWrapper>
        )
    }
}
const mapStateToProps =(state)=> ({
    list: state.get('home').get('topicList')
});
//用不着mapDispatchToProps因为我们就想从store拿数据而根本就不用改这些数据
export default connect(mapStateToProps,null)(Topics);