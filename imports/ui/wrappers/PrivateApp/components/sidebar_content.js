import { Meteor } from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import { stopSubscription } from 'meteor-redux-middlewares';

import { ACCOUNTS_USER_SUB } from '../modules';

import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Navbar,
  NavItem,
  NavLink
} from 'reactstrap';

import MaterialTitlePanel from './material_title_panel';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
    scroll: 'no',
    overflow: 'hidden'
  },
  sidebarLink: {
    display: 'block',
    padding: '10px 0px',
    color: 'white',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: '#2b3f5c',
  },
};

class SidebarContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = this.props.style ? {...styles.sidebar, ...this.props.style} : styles.sidebar;
    const { dispatch } = this.props;
    
    return (
      <MaterialTitlePanel title="" style={style} onSetOpen={(open)=>{
        this.props.onSetOpen(open);
      }} >
      <div style={styles.content}>
        <div style={{height: '25%'}} ></div>
        <div style={{height: '40%', marginLeft: '20px', display:'table'}} >
          <div style={{display:'table-cell', verticalAlign: 'middle'}}>
            {/* <a href="/settings" style={styles.sidebarLink}>PROFILE SETTINGS</a> */}
            <div onClick={()=>{this.props.onSetOpen(false);}}>
              <Link to="/settings" style={styles.sidebarLink}><span>PROFILE SETTINGS</span></Link>
            </div>
            <div onClick={()=>{this.props.onSetOpen(false);}}>
              <Link to="/" style={styles.sidebarLink}><span>TUTORIALS</span></Link>
            </div>
            <div onClick={()=>{this.props.onSetOpen(false);}}>
              <Link to="/" style={styles.sidebarLink}><span>FAQ</span></Link>
            </div>
            <div onClick={()=>{this.props.onSetOpen(false);}}>
              <Link to="/" style={styles.sidebarLink}><span>PRIVACY POLICE</span></Link>
            </div>
            <div onClick={()=>{this.props.onSetOpen(false);}}>
              <Link to="/" style={styles.sidebarLink}><span>{"TERMS & CONDITIONS"}</span></Link>
            </div>
            <div onClick={()=>{this.props.onSetOpen(false);}}>
              <Link to="/" style={styles.sidebarLink}><span>SUPPORT</span></Link>
            </div>
          </div>
        </div>
        <div style={{position:'absolute', bottom:'0px', right:'0px', height: '50px', width: '100%', display:'table'}} >
          <div style={{height: '50px', width: '100%', display:'table-cell', verticalAlign: 'middle'}} >
            <div style={{height: '100%', width: '100%', display:'table'}}>
              <div style={{height: '100%', width: '40%', display:'table-cell', textAlign: 'center', padding: '5px', color: 'white', cursor: 'pointer' }} onClick={()=>{}} >
                <div style={{display: 'table', verticalAlign: 'middle'}}>
                  <div style={{display: 'table-cell', textAlign: 'center', padding: '5px', verticalAlign: 'middle'}}>
                    <img src="./img/icons/menu-user.png" height={30} />
                  </div>
                  <div style={{display: 'table-cell', textAlign: 'center', verticalAlign: 'middle'}}>
                    <span>{this.props.currentUser.firstName + "\n" + this.props.currentUser.lastName}</span>
                  </div>
                </div>
              </div>
              <div style={{height: '100%', width: '20%', display:'table-cell'}}></div>
              <div style={{height: '100%', width: '40%', display:'table-cell', textAlign: 'center', verticalAlign: 'middle', cursor: 'pointer' }} onClick={()=>{
                Meteor.logout(err => {
                  if (err) {
                    toastr.error('Error logging out', err.reason);
                  } else {
                    dispatch(stopSubscription(ACCOUNTS_USER_SUB));
                    dispatch(push('/login'));
                  }
                });
              }} >
                <img src="./img/icons/logout.png" height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </MaterialTitlePanel>
    );
  }
}

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default connect()(SidebarContent);
