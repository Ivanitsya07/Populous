import {Meteor} from 'meteor/meteor';
import {User, Invoice} from 'meteor/populous:api';
import {userRoles, fixtures} from 'meteor/populous:constants';

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

  if(Invoice.find().count() === 0){
    console.log('=> Installing Invoices fixtures');
    const borrowerId = User.findOne({role: userRoles.borrower})._id;

    fixtures.invoices(borrowerId).forEach(
      invoice => {
        Invoice.insert(invoice);
      }
    )
  }

  if (User.find({role: userRoles.admin}).count() === 0) {
    console.log('=> Installing Admin fixtures');
    Accounts.createUser(fixtures.users.admin);
  }
});
