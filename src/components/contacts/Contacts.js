import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contact.contacts);

  return (
    <div>
      <table className="table shadow">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Job</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
