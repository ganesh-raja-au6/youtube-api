import React from 'react'
import {connect} from 'react-redux'

const Profile  = (props) => {
    console.log(props)
    
    return (
        <p>Profile</p>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.loginReducer.user
    }
}

export default connect(mapStateToProps, null)(Profile)