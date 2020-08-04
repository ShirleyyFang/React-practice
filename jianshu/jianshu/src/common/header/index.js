import React,{Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style';
import { ThemeConsumer } from 'styled-components';

class Header extends Component {
    getListArea() {
        const newList = this.props.list.toJS();
        const pageList = [];

        if(newList.length){
            for(let i=(this.props.page-1)*10; i<this.props.page*10; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if(this.props.focused || this.props.mouseIn) {
            return (
            <SearchInfo 
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
            >
                <SearchInfoTitle>热门搜索
                    <SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page,this.props.totalPage,this.spinIcon)}>
                    <i ref={(icon)=> {this.spinIcon=icon}} className="iconfont spin">&#xe851;</i>换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>)
        }else{return null;}
    }

    render(){
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                    <SearchWrapper>
                        <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
                        <NavSearch 
                            className={this.props.focused ? 'focused':''}
                            onFocus={() => this.props.handleInputFocus(this.props.list)}
                            onBlur={this.props.handleInputBlur}
                        >
                        </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe60c;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'><i className="iconfont">&#xe708;</i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            if(list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }  else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            if (page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);