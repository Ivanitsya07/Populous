import { connect } from 'react-redux';

import Settings from '../components/Settings';

const mapStateToProps = ({ app }) => ({
  currentUser: app.currentUser,
});

export default connect(
  mapStateToProps
)(Settings)
