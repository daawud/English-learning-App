import './Header.scss';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="row mt-2 ">
                    <Link to='/auth' className="auth-btn"> ВОЙТИ </Link>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Header);
