import React,{Component} from 'react';
import {WriterWrapper, WriterTitle, WriterItem} from '../styled';
import {connect} from 'react-redux';

class Writer extends Component {
    render(){
        return (
            <WriterWrapper>
                <WriterTitle>推荐作者</WriterTitle>
                {this.props.list.map((item)=>{
                    return (
                        <WriterItem key={item.get('id')}>
                        <img className = 'writer-pic'src={item.get('imgUrl')}></img>
                        <a className = 'writer-name'>{item.get('name')}</a>
                        <a className = 'subscribe'>+关注</a>
                        </WriterItem>)
                })}
            </WriterWrapper>
        )
    }
}

const mapStateToProps =(state)=> ({
    list: state.get('home').get('writerList')
});
export default connect(mapStateToProps,null)(Writer);