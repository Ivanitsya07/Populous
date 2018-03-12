/* global process */
import { Meteor } from 'meteor/meteor';
import { EthId } from 'meteor/populous:api';
import PopulousEthComm from '@populous/populous-eth-comm';

// Make sure the path is right when bundling the app
const contractsPath = `${process.env.PWD}/../populous-smartcontracts/build/contracts`;
const ethComm = new PopulousEthComm({ contractsPath });

Meteor.methods({

  // Creates a new PPT deposit contract for the given user
  // NB: user should be an Astronomy User class instance.
  'ethComm.createPPTAddress'(user) {
    if (!user) {
      throw new Meteor.Error('Error', 'Malformed request');
    }

    // Skip if the user already has a PPT address
    if (user.PPTAddress) {
      return;
    }

    // Create the new address for this ethId
    ethComm.createDepositAddress(user.ethId())
      .then(address => {

        // Save the address to the user
        user.PPTAddress = address;
        user.save();
      })
      .catch(e => {
        throw new Meteor.Error('Error', e.reason);
      });
  },
});

export default ethComm;
