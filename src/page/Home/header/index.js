import React from "react";
import './index.css'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return(
            <div className="banner">
                <ul>
                    <li>目录一</li>
                    <li>目录二</li>
                    <li>目录三</li>
                    <li>目录四</li>
                    <li>目录五</li>
                    <li>目录六</li>
                    <li>目录七</li>
                </ul>
            </div>
        )
    }
}
export default Header