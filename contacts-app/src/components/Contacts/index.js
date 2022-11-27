import {useState} from 'react'
import List from './List'
import Form from './Form'
function Contacts() {
  const [contacts , setContacts] = useState([
    {fullname:"Buğra", phonenumber:"+905553331122"},
    {fullname:"Ahmet", phonenumber:"+905550001111"},
    {fullname:"Mehmet", phonenumber:"+905551110000"},
    {fullname:"Murtaza", phonenumber:"+905554445555"}
  ]);
  return (
    <div id="container">
        <h1>Contacs App Patika</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
    
  )
}

export default Contacts