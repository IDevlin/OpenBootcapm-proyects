import React from 'react';
import { STATE } from '../../models/State.enum';
import { Contact } from '../../models/Contact.class';
import SingleContact from '../pure/SingleContact';

// =========COMPONENT A============//
const ContatcListComponent = () => {
  const anyContact = new Contact(
    'Juan',
    'Amariles',
    'juan@email.com',
    STATE.ONLINE
  );

  return (
    <div>
      <div><h2>Contacts</h2></div>
      {/* Aplicar For o Map para renderizar un a lista*/}
      <SingleContact contact={anyContact}/>
    </div>
  );
};

export default ContatcListComponent;
