import React from 'react'
import './index.css'
// import  ReactDOM  from 'react-dom'
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data :new Date(),
            colseTime:null
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
                    return
                } 
                clearInterval(timer)
                timer = null
            }
            }
        )
    }
    render() {
        return (
            <div id='root'>
                <div>Hello World</div>
                <h2>It is {this.state.data.toLocaleTimeString()}.</h2>
                <div className='btn'>
                <button onClick={this.state.closeTime}>start</button>
                <button onClick={this.state.closeTime}>stop</button>
                </div>
            </div>
        )
    }
}
export default Clock