import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('look', this.props)
    }

    render() {

        return (
            <div>Lokk!</div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);