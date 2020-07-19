//Yanbing Fang July 16th
import React from 'react';
import propTypes from 'prop-types';


class TodoItem extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        const { content } =  this.props;
        return (<div onClick={this.handleClick}>{content}</div>) 
        //父组件向子组件传递值是通过属性（props）的形式传递
    }
    handleClick(){
        const { deleteItem,index } = this.props;
        //子组件如何调用父组件的方法修改父组件的内容
        this.props.deleteItem(index)
    }
}
TodoItem.propTypes ={
    content:propTypes.string,
    deleteItem:propTypes.func,
    index:propTypes.number
}
export default TodoItem;