import React from 'react'
import './index.css'
class HelloWord extends React.Component{
    render() {
        return (
            <div className='container'>
                <div className='loginContent'>
                    <input type="text"></input>
                    <input type="password"></input>
                    <div>
                        <button onClick={goLogin}>登录</button>
                        <button onClick={outLogin}>退出</button>
                    </div>
                </div>
            </div>
        )
    }
}
function goLogin() {
    console.log('正在登录');
    let timer1 = null
    timer1 = setTimeout(()=>{
        window.localStorage.setItem('token','fkjfajowjdovnbhjbvgawfdwdcjfnja')
        console.log('登陆成功,token为',window.localStorage.getItem('token'));
        window.location.href='http://baidu.com'
        clearTimeout(timer1)
    },1000)
}
function outLogin() {
    console.log('退出成功');
    let timer2 = null
    timer2 =setTimeout(()=>{
        window.localStorage.removeItem('token')
        console.log('token已删除');
        clearTimeout(timer2)
    })
}
export default HelloWord