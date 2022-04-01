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
                        <button>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HelloWord