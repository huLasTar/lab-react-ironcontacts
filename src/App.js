// src/App.js
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  // Iteration 2:
  const [getContacts, setContacts] = useState(contacts.slice(0, 5));

  // Iteration 3:
  const addRandomContact = () => {
    const remainingContacts = contacts.filter(
      (remaining) => !getContacts.includes(remaining)
    );
    const random = Math.floor(Math.random() * remainingContacts.length);
    setContacts(remainingContacts.splice(random, 1).concat(getContacts));
  };

  // Iteration 4:
  const sortByName = () => {
    const allContacts = [...getContacts];
    // sorted numbers, only with - descending order or + ascending order
    const sortedByName = allContacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedByName);
  };

  const sortByPopularity = () => {
    const allContacts = [...getContacts];
    // sorted numbers, only with - descending order or + ascending order
    const sortedByPopularity = allContacts.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedByPopularity);
  };

  // Iteration 5:
  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact._id !== contactId;
    });

    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button className="button" onClick={addRandomContact}>
        Add Random Contact
      </button>
      <button className="button" onClick={sortByName}>
        Sort by Name
      </button>
      <button className="button" onClick={sortByPopularity}>
        Sort by Popularity
      </button>
      <table className="contactsTable">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getContacts.map((contact, key) => {
            return (
              <tr key={key}>
                <td className="contactPicture">
                  <img
                    className="contactImg"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td className="contactName">{contact.name}</td>
                <td className="contactPopularity">
                  {contact.popularity.toFixed(2)}
                </td>
                <td className="contactOscar">
                  {contact.wonOscar ? <p>🏆</p> : null}
                </td>
                <td className="contactEmmy">
                  {contact.wonEmmy ? <p>🏆</p> : null}
                </td>
                <td className="contactDelete">
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className="deleteButton"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
