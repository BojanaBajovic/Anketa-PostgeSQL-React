import React, { Component } from 'react'
import picture from '../assets/picture.gif'

class Landing extends Component {
    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">ANKETA</h1>
                    </div>
                </div>
                <div>
                    <img src={picture} alt="Slika" style={{width: '50%', height: '50%', alignSelf: 'center'}} />
                    <img src={picture} alt="Slika" style={{width: '50%', height: '50%', alignSelf: 'center'}} />
                </div>
            </div>
        )
    }
}

export default Landing