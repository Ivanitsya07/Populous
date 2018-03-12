import { Meteor } from 'meteor/meteor';
import { User } from 'meteor/populous:api';
import { userRoles, fixtures } from 'meteor/populous:constants';

// Config imports \\
import 'meteor/populous:api/lib/accounts/server/accounts-hooks';
import 'meteor/populous:api/lib/accounts/server/email-templates';
import '../imports/config/server/accounts';

// Module imports \\
import '../imports/ipfs/server';
import '../imports/eth-comm/server';

Meteor.startup(() => {

  // Setup fixtures
  if (User.find().count() === 0) {
    console.log('=> Installing Accounts fixtures');
    Accounts.createUser(fixtures.users.borrower);
    Accounts.createUser(fixtures.users.investor);
  }

  if (User.find({ role: userRoles.admin }).count() === 0) {
    console.log('=> Installing Admin fixtures');
    Accounts.createUser(fixtures.users.admin);
  }
});
