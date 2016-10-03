/**
*
* Header
*
*/

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import styles from './styles.css';

function Header() {
  return (
    <div className={styles.header}>
      <Navbar className={`${styles.navbar}`} fixedTop>
        <Navbar.Header>
          <Navbar.Brand className={styles.brand}>
            <a href="/">Packem</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem className={styles.navitem} eventKey={1} href="/user">User</NavItem>
            <NavItem className={styles.navitem} eventKey={2} href="/cart">Cart</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
