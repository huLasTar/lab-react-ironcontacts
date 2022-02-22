// src/App.js
import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [getContacts, setContacts] = useState(contacts.slice(0, 5));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="contactsTable">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {getContacts.map((contact) => {
            return (
              <tr>
                <td className="contactPicture">
                  <img
                    className="contactImg"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td className="contactName">{contact.name}</td>
                <td className="contactPopularity">{contact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
