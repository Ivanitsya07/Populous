import React from 'react';
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';

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

const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  return (
    <MaterialTitlePanel title="" style={style} onSetOpen={(open)=>{
      props.onSetOpen(open);
    }} >
    <div style={styles.content}>
      <div style={{height: '25%'}} ></div>
      <div style={{height: '40%', marginLeft: '20px', display:'table'}} >
        <div style={{display:'table-cell', verticalAlign: 'middle'}}>
          <a href="#" style={styles.sidebarLink}>PROFILE SETTINGS</a>
          <a href="#" style={styles.sidebarLink}>TUTORIALS</a>
          <a href="#" style={styles.sidebarLink}>FAQ</a>
          <a href="#" style={styles.sidebarLink}>PRIVACY POLICY</a>
          <a href="#" style={styles.sidebarLink}>SUPPORT</a>
        </div>
      </div>
      <div style={{position:'absolute', bottom:'0px', right:'0px', height: '50px', width: '100%', display:'table'}} >
        <div style={{height: '50px', width: '100%', display:'table-cell', verticalAlign: 'middle'}} >
          <div style={{height: '100%', width: '100%', display:'table'}}>
          <div style={{height: '100%', width: '40%', display:'table-cell', textAlign: 'center', padding: '5px', color: 'white', cursor: 'pointer' }} onClick={()=>{}} >
              PROFILE
          </div>
          <div style={{height: '100%', width: '20%', display:'table-cell'}}></div>
          <div style={{height: '100%', width: '40%', display:'table-cell', textAlign: 'center', padding: '5px', color: 'white', cursor: 'pointer' }} onClick={()=>{}} >
              LOG OUT
          </div>
          </div>
        </div>
      </div>
    </div>
    </MaterialTitlePanel>
  );
}

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;