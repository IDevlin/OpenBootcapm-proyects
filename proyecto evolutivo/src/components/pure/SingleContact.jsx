import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.class';

//COMPONENT B
const SingleContact = ({ contact }) => {
  const { name, lastName, email, conected } = contact;
  console.log(name)
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>LastName: {lastName}</h3>
      <h4>Email: {email}</h4>
      <h5>User State is: {conected? 'Online' : 'Offline'}</h5>
    </div>
  );
};

/*TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};*/

export default SingleContact;
