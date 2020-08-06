import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;
export const HomeLeft = styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img {
        width:625px;
        height:290px;
    }
`;
export const HomeRight = styled.div`
    width:280px;
    float:right;
`;

//css for Topics.js 
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    padding-right:10px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px
    }
`;

//css for List
export const ListItem = styled.div`
    overflow: hidden;
    padding:20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display:block;
        width:110px;
        height:105px;
        margin-top:12px;
        float:right;
        border-radius:10px;
        cursor:pointer;
    }
`;

export const ListInfo = styled.div`
    width:500px; 
    float:left;
    .title {
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc {
        line-height:24px;
        font-size:13px;
        color:#999
    }
`;

export const LoadMore = styled.div`
    margin:30px 0;
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
`;

//css for recommend
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`;
export const RecommendItem = styled.div`
    margin-top: 5px;
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});//style-components的语法
    background-size:contain;
`;

//css for writer
export const WriterWrapper = styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    border-radius: 3px;
    overflow: hidden;
`;
export const WriterTitle = styled.div`
    text-align:left;
    color:#999;
    margin:10px;
    width:100%;
`;
export const WriterItem = styled.div`
    line-height:50px;
    padding:8px;
    .writer-pic{
        float:left;
        border-radius:50%;
        height:50px;
    }
    .writer-name{
        padding-left:10px;
    }
    .subscribe{
        color:#5ec850;
        float:right;
    }
`;
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:30px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
`