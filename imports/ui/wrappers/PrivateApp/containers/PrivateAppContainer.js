import { Meteor } from 'meteor/meteor';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTracker } from 'meteor/react-meteor-data';
import { User } from 'meteor/populous:api';

import PrivateApp from '../components/PrivateApp';
import { SET_CURRENT_USER, APP_LOADING } from '../modules';

const reduxData = connect(
  state => state.app,
  dispatch => ({
    init: user => {
      dispatch({ type: SET_CURRENT_USER, user });
      dispatch({ type: APP_LOADING, loading: false });
    },
  })
);

// Subscribe to the meteor db and init the store
const meteorData = withTracker(({ loading, init }) => {

  // Make sure the data for the current user is available
  const users = Meteor.subscribe('accounts.user', Meteor.userId());

  // Publish all of the eth-ids
  const ethIds = Meteor.subscribe('ethIds.all');

  const dataReady = (
    users.ready() &&  // wait for user subscription
    ethIds.ready() && // wait for ethIds subscription
    !Meteor.loggingIn() // wait for Meteor to find current user session
  );

  // If the app state is loading, and the data is ready,
  // init the app with the user data
  if (loading && dataReady) {
    const user = User.findOne(Meteor.userId());
    init(user);
  }

  // We have to return an object for withTracker to work
  return {};
});

// Let reduxData override any values set in meteorData
export default compose(reduxData, meteorData)(PrivateApp);
