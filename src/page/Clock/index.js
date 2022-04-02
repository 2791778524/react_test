import React from 'react'
import './index.css'
// import  ReactDOM  from 'react-dom'
//Clock时间组件
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data :new Date(),
            colseTime:null,
            btnTitle: true
        }
    }
    componentDidMount() {
        let timer = null
        let that = this
        // timer = setInterval(()=>{
        //     this.setState({data: new Date()})
        // },1000)
        this.setState(
            {closeTime:function closeTime() {
                if(timer == null){
                    console.log(timer);
                    timer = setInterval(()=>{
                        that.setState({data: new Date()})
                    },1000)
                    that.setState({btnTitle: false})
                    return
                } 
                clearInterval(timer)
                timer = null
                that.setState({btnTitle: true})
            }
            }
        )
    }
    render() {
        return (
            <div id='root'>
                <div>Hello World</div>
                <h2>时间：{this.state.data.toLocaleTimeString()}.</h2>
                <div className='btn'>
                <button onClick={this.state.closeTime}>{this.state.btnTitle ? '开始' : '暂停'}</button>
                </div>
            </div>
        )
    }
}
export default Clock