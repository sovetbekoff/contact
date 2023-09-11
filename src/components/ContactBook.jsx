import React, { useState } from "react";

function ContactBook() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const addContact = () => {
    if (name && phoneNumber && photo) {
      const newContact = {
        name,
        phoneNumber,
        photo,
      };

      if (editIndex !== -1) {
        const updatedContacts = [...contacts];
        updatedContacts[editIndex] = newContact;
        setContacts(updatedContacts);
        setEditIndex(-1);
      } else {
        setContacts([...contacts, newContact]);
      }

      setName("");
      setPhoneNumber("");
      setPhoto("");
    }
  };

  const editContact = (index) => {
    const contactToEdit = contacts[index];
    setName(contactToEdit.name);
    setPhoneNumber(contactToEdit.phoneNumber);
    setPhoto(contactToEdit.photo);
    setEditIndex(index);
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div className="contact-book">
      <h1>Книга контактов</h1>
      <div>
        <input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Фото"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="text"
          placeholder="Номер"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={addContact}>
          {editIndex !== -1 ? "Редактировать" : "Добавить контакт"}
        </button>
        <button
          onClick={() => {
            setName("");
            setPhoneNumber("");
            setPhoto("");
            setEditIndex(-1);
          }}
        >
          Отменить
        </button>
      </div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <img src={contact.photo} alt={contact.name} />
            <p>{contact.name}</p>
            <p>{contact.phoneNumber}</p>
            <button onClick={() => editContact(index)}>Редактировать</button>
            <button onClick={() => deleteContact(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactBook;
