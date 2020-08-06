import React,{PureComponent} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {actionCreator} from './store'
import { LoginWrapper, LoginBox, Input, Button} from './style';
import {Link} from 'react-router-dom';

class Login extends PureComponent {
    render(){
        const {loginStatus} = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                <LoginBox>
                        {/* innerRef 拿到真实的dom */}
                    <Input placeholder="账号" ref={(input) => {this.account = input}}/> 
                    <Input placeholder="密码" type='password' ref={(input) => {this.password = input}}/>
                    <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
                </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/'/>;
        }
    }
}
const mapState = (state) => ({
    loginStatus:state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem,passwordElem){
        dispatch(actionCreator.login(accountElem.value, passwordElem.value))
        console.log(accountElem)
    }
})
export default connect(null,mapDispatch)(Login);