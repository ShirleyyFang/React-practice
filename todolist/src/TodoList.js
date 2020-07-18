//Yanbing Fang July 16th
import React, { Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          inputValue: '',  
          list: []
      }
      //this 的绑定最好统一放在这儿
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleBtnClick = this.handleBtnClick.bind(this);
      this.handleItemDelete = this.handleItemDelete.bind(this);
    }  
    render() {
      return (
        <Fragment>
            <div>
                <label htmlFor="insertArea">输入内容</label>
                <input 
                    id= "insertArea"
                    className='input'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleBtnClick}>submit</button>
            </div>
            <ul>
                {this.state.list.map((item,index) => {
                    return (
                        <TodoItem 
                        key = {index} 
                        content={item} 
                        index={index}
                        deleteItem={this.handleItemDelete}//所以不仅可以传数据还可以传方法
                        //但注意要把这个handleItemDelete绑定到小组件上
                        /> 
                    )
                }
                )}
            </ul>
        </Fragment>
      )
    }
    handleInputChange(event){
        const value = event.target.value;
        this.setState(() => ({
            inputValue: value
        }));
    }
    handleBtnClick(){
        this.setState((prevState) => ({
            list:[...prevState.list, prevState.inputValue], //生成新的数组，赋值给component的list
            inputValue: ''
        }))
    }
    handleItemDelete(index){

        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        });
    }
}                                                      
export default TodoList;