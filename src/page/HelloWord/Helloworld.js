import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
class Helloworld extends React.Component{
    render(){
        return (
            <div id="root">
                <Test name="Mili" age="18" sex="女"></Test>
                <Test name="Make" age="19" sex="男"></Test>
                <Test name="Nicy" age="20" sex="女"></Test>
                <button onClick={stopTimer}>开始/暂停</button>
                <div id="content"></div>
            </div>
        )
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount执行了,组件被销毁');
    }
    componentDidMount() {
        console.log('componentDidMount执行了,组件加载完成');
    }
}
let count = 0
function name(value){
    return value + 1
}
function tick() {
    let dom =  (
        <div className='shopping-list'>
            <h1>Shopping List for {name(4)}</h1>
            <h2>It is {count+=1}</h2>   
        </div>
    )
    ReactDom.render(dom,document.getElementById('content'))
}
class Test extends React.Component{
    render() {
        return(
            <div className='container'>
                <h2>{this.props.name}个人信息</h2>
                <p>name: {this.props.name}</p>
                <p>age: {this.props.age}</p>
                <p>sex: {this.props.sex}</p>
                <hr />
            </div>
        )
    }
}
let timer = null
function stopTimer() {
    if(timer)
     {
        clearInterval(timer)
        timer = null
        return
     }
     timer = setInterval(tick,1000)
    
}
// setInterval(tick,1000)
export default Helloworld