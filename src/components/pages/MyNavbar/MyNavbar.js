import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const buildNavbar = () => {
      const { authed } = this.props;

      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/home" style={{ color: 'white' }}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/myteam" style={{ color: 'white' }}>My Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/newplayer" style={{ color: 'white' }}>New Player</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'white' }} onClick={this.logMeOut}>Logout</NavLink>
          </NavItem>
        </Nav>
        );
      }

      return <Nav className="ml-auto" navbar></Nav>;
    };

    return (
      <div>
        <Navbar sticky="top" color="dark" light expand="md">
          <NavbarBrand href="/"><i className="fal fa-football-helmet"></i></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
