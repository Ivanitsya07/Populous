import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300,
  },
  header: {
    backgroundColor: '#2b3f5c',
    color: 'white',
    padding: '0px',
    fontSize: '1.5em',
    height: '60px'
  },
};

const MaterialTitlePanel = (props) => {
    return (
    <div style={props.style}>
      <div style={styles.header}>{props.title}
        <div style={{ marginLeft: '75%', width: '25%', height: '100%', border: '1px solid #5ca0fa', cursor: 'pointer' }} onClick={()=>{props.onSetOpen(false);}} >
          <h1 style={{ margin: 'auto', padding: '5px', textAlign: 'center'}}><span aria-hidden="true">×</span></h1>
        </div>
      </div>
      {props.children}
    </div>
  );
};

MaterialTitlePanel.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  children: PropTypes.object,
};

export default MaterialTitlePanel;
