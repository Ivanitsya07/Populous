import { Meteor } from 'meteor/meteor';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTracker } from 'meteor/react-meteor-data';

import PrivateApp from '../components/PrivateApp';
import { loadUser } from '../modules/actions/loadUser';

const mapStateToProps = ({ app }) => ({
  loading: app.loading,
  currentUser: app.currentUser
});

const mapDispatchToProps = dispatch => ({
  init: _id => dispatch(loadUser(_id)),
});

// We need to do this crap becuase meteor runs this
// in parallel with Meteor.loggingIn
// https://docs.meteor.com/api/accounts.html#Meteor-loggingIn
// and Meteor.userId() isn't available until Meteor.loggingIn
// is false.
const meteorData = withTracker(({ currentUser, init }) => {

  // wait for Meteor to find current user session
  // andn then init the current user
  if (!currentUser && !Meteor.loggingIn()) {
    init(Meteor.userId());
  }

  // We have to return an object for withTracker to work
  return {};
});

const reduxData = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(reduxData, meteorData)(PrivateApp);
