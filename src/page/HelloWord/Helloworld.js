import React from 'react'
import './index.less'
class HelloWord extends React.Component{
    render() {
        return (
            <div className='container'>
                <div className='loginContent'>
                    <input type="text"></input>
                    <input type="password"></input>
                    <div>
                        <button onClick={goLogin}>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}
function goLogin() {
    console.log('正在登录');
    setTimeout(()=>{
        window.localStorage.setItem('token','fkjfajowjdovnbhjbvgawfdwdcjfnja')
        console.log('登陆成功,token为',window.localStorage.getItem('token'));
    },1000)
}
export default HelloWord