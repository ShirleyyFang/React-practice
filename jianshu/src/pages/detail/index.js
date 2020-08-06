import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
    DetailWrapper,
    Header,
    Content
}from './style'
import {actionCreators} from './store'

class Detail extends Component {
    render(){
        return (
            <div>
             {
                this.props.article.map((item)=> {
                    if(item.articleId === this.props.match.params.id){
                        return (
                            <DetailWrapper>
                            <Header>{item.title}</Header>
                            <Content dangerouslySetInnerHTML={{__html:item.content}}></Content>
                            </DetailWrapper>
                        )
                    }
                })
            }
            </div>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState = (state) => ({
    article:state.getIn(['detail','article'])
})
const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapState,mapDispatch)(Detail);