import React, {Component} from 'react'
import {connect} from 'react-redux'
import { search } from '../redux/actions/search'

const Videos = ({searchList}) => {
    console.log(searchList)
    return (
        <p>Hi</p>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        searchList : state
    }
}

export default connect(mapStateToProps, null)(Videos)