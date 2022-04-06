import React from "react";
import './index.css'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[
                {
                    id:'01',
                    value:'首页'
                },
                {
                    id:'02',
                    value:'产品分类'
                },
                {
                    id:'03',
                    value:'产品列表'
                },
                {
                    id:'04',
                    value:'产品信息'
                },
                {
                    id:'05',
                    value:'产品参数'
                },
                {
                    id:'06',
                    value:'公司简介'
                },
                {
                    id:'07',
                    value:'产品中心'
                }
            ]
        }
    }
    render() {
        return(
            <div className="container">
                <div className="banner">
                <ul>
                    {this.state.data.map(item => {
                        return(
                            <li key={item.id}>{item.value}</li>
                        )
                    })
                    }
                </ul>
                <div className="content">
                    <div className="left">left</div>
                    <div className="center">
                        <div class="center_content">
                            内容
                        </div>
                    </div>
                    <div className="right">right</div>
                </div>
                </div>
                <div class="footer">
                    尾部
                </div>
            </div>
        )
    }
}
function evn(){
    if(process.env.REACT_APP_TYPE === 'development'){
        console.log(process.env.REACT_APP_URL);
    } else {
        console.log('没有找到信息');
    }
}
evn()
export default Header