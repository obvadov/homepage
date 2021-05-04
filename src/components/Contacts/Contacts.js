import React from "react";
import ContactItem from "./ContactsItem";

const Contacts = ({contactsFromDb, developedBy}) => {
  //@TODO: add fields to firebase entities
  const dummyContactsFromDB = [
    {
      href: "http://twitter.com",
      i_type: "fab fa-twitter",
      caption: "Twitter",
    },
    {
      href: "http://instagram.com",
      i_type: "fab fa-instagram",
      caption: "Instagram",
    },
    {
      href: "http://facebook.com",
      i_type: "fab fa-facebook",
      caption: "Facebook",
    },
    {
      href: "http://linkedIn.com",
      i_type: "fab fa-linkedin",
      caption: "LinkedIn",
    },
  ];

  // @TODO: add fields to firebase. For now using dummy data
  const contactsListSource = contactsFromDb
    ? contactsFromDb
    : dummyContactsFromDB;

  return (
    <section id="contacts" className="text-center">
      <div className="container">
        <h2 className="section-title">Contacts</h2>
        <div className="bline"></div>
        <p className="lead">
          Still want to contact me? <i className="far fa-smile-wink"></i>
        </p>

        <div className="contacts-list text-center">
          {contactsListSource.map((contact) => (
            <ContactItem key={contact.i_type} {...contact} />
          ))}
        </div>
        <div id="developer">
          <span>developed by {developedBy}</span>{" "}
          <span dangerouslySetInnerHTML={{__html: "&copy;"}} /> 2021
        </div>
      </div>
    </section>
  );
};

export default Contacts;
