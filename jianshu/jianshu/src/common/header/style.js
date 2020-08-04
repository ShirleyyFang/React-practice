import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom: 1px solid #f0f0f0;
`; 
export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin: 0 auto;
`;
// &.这个是指如果class=left向左浮动，如果class=right向右浮动...
export const NavItem = styled.div `
    line-height:56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a;
    }
`;
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .slide-enter{
        transition:all .2s ease-out;
    }
    .slide-enter-active{
        width:240px;
    }
    .slide-exit{
        transition:all .2s ease-out;
    }
    .slide-exit-active{
        width:160px;
    }
    .zoom {
        position: absolute;
        right:5px;
        width:30px;
        bottom:5px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        &.focused {
            background:#777;
            color:fff
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:15px;
    &::placeholder {
        color:#999;
    }
    &.focused {
        width: 240px;
    }
`;
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    background:#ffffff;
    box-shadow:0 0 8px rgba(0,0,0,.2)
`;
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform-origin: center center;
    }
`;
export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    line-height:20px;
    padding:0 5px;
    margin-right:10px;
    margin-bottom:10px;
    font-size:12px;
    border:1px solid #ddd;
    color:#333;
    border-radius:2px;
`;
export const SearchInfoList = styled.div`
    overflow:hidden;
`;
export const Addition = styled.div `
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
export const Button = styled.div `
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color:#fff;
        background:#ec6149;
    }
`
