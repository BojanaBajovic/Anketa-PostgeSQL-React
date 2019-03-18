import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import pic1 from '../assets/pic1.gif'
import pic2 from '../assets/pic2.gif'
import pic3 from '../assets/pic3.gif'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <img src={pic1} alt="Slika" style={{width: '33%', height: '50%', alignSelf: 'center', marginTop: 30, padding: 2}} />
                    <img src={pic2} alt="Slika" style={{width: '33%', height: '50%', alignSelf: 'center', marginTop: 30, padding: 2}} />
                    <img src={pic3} alt="Slika" style={{width: '33%', height: '50%', alignSelf: 'center', marginTop: 30, padding: 2}} />
                </div>
            </div>
        )
    }
}

export default Profile