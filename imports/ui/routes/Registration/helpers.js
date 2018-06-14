import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { toastr } from 'react-redux-toastr';
import { userRoles } from 'meteor/populous:constants';
import { User } from 'meteor/populous:api';

// This function is used to register a new
// user as an investor
export const createInvestor = (
  email,
  password,
  passwordConfirm,
  firstName,
  lastName,
  country,
  push // This is a react-router history.push function
) => {

  // Check passwords match
  if (password !== passwordConfirm) {
    toastr.error('Error', 'Your passwords do not match');
    return
  }

  const user = {
    email,
    password,
    firstName,
    lastName,
    country,
    role: userRoles.investor
  };

  _createUser(user, push);
};


// This function is used to register a new
// user as a borrower
export const createBorrower = (
  email,
  password,
  passwordConfirm,
  firstName,
  lastName,
  companyName,
  companyNumber,
  companyDescription,
  addressLine1,
  addressLine2,
  city,
  postcode,
  country,
  phoneNumber,
  occupation,
  push // This is a react-router history.push function
) => {

  // Check passwords match
  if (password !== passwordConfirm) {
    toastr.error('Error', 'Your passwords do not match');
    return
  }

  const user = {
    email,
    password,
    firstName,
    lastName,
    companyName,
    companyNumber,
    companyDescription,
    addressLine1,
    addressLine2,
    city,
    postcode,
    country,
    phoneNumber,
    occupation,
    role: userRoles.borrower
  };

  _createUser(user, push);
};

// Use this function to check if a new user model
// object is valid
// @param {module:populous:api/lib/accounts/model~User} user must be
//   an instance of the User model class
const _validateUser = user => {
  return new Promise((resolve, reject) => {
    user.validate({
      fields: [
        'firstName',
        'lastName',
        'companyName',
        'companyNumber',
        'companyDescription',
        'addressLine1',
        'addressLine2',
        'city',
        'postcode',
        'country',
        'phoneNumber',
        'occupation',
      ],
    }, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// Validate and create the user
// @param {Object} user must be an object of user fields
// @param {Function} push must be react-router `history.push()`
const _createUser = (user, push) => {
  const userClass = new User(user);

  _validateUser(userClass).then(() => {
    Accounts.createUser(
      user,
      err => {
        if (err) {
          if (err.reason === 'Email already exists.') {
            toastr.error('Error', 'That email address is already registered');
          } else {
            toastr.error('Error', 'Something went wrong! Please try again');
          }

          return;
        }

        // The createUser method tries to log the user in so
        // we manyally log them out and push them to login
        Meteor.logout(() => {
          push('/login', {showModal: true});
        });
      }
    );
  }).catch((err) => {
    toastr.error('Error', err.reason);
  });
};
