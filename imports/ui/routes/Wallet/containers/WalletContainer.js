import { connect } from 'react-redux';

import Wallet from '../components/Wallet';
import { createAddress } from '../modules/actions';

const mapStateToProps = ({ app, wallet }) => ({
  currentUser: app.currentUser,
  creatingAddress: wallet.creatingAddress,
});

const mapDispatchToProps = dispatch => ({
  createAddress: (e) => {
    e.preventDefault();
    dispatch(createAddress());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet)
