import React,{Component} from 'react';
import {ListItem,ListInfo,LoadMore} from '../styled';
import {connect} from 'react-redux';
import axios from 'axios';
import {fromJS} from 'immutable';
import {Link} from 'react-router-dom';

class List extends Component {
    render(){
        return (
            <div>
            {this.props.list.map((item)=> {
                return (
                    <Link key={item} to='/detail'>
                    <ListItem>
                        <img className='pic' src={item.get('imgUrl')}></img>
                        <ListInfo>
                            <h3 className='title'>{item.get('title')}</h3>
                            <p className='desc'>{item.get('desc')}</p>
                        </ListInfo>
                    </ListItem>
                    </Link>
                )
            })}
            <LoadMore onClick={()=> this.props.getMoreList(this.props.page)}>更多文字</LoadMore>
            </div>
        )
    }
}
const mapState = (state) => ({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
    getMoreList(page){
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const result = res.data.data;
            const addHomeList = (list,nextPage) => ({
                type:'add_article_list',
                list:fromJS(list),
                nextPage
            })
            dispatch(addHomeList(result,page+1));
        });
    }
})


export default connect(mapState,mapDispatch)(List);