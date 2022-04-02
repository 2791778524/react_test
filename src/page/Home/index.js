import React from 'react'
import Header from './header/index'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return(
            <div className='container'>
                <Header />
            </div>
        )
    }
}
export default Home