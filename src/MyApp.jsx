

import {useState }from 'react'
import{Contact} from './components/Contact.jsx'


//const listContacts=[] version Js . 

function MyApp(){

    const [listContacts, setlistContacts]= useState([])
   

        function getContact(){
        fetch('http://localhost:8000/api/contacts')

        .then((res)=>res.json())
        .then((data)=>setlistContacts(data['hydra:member']))
    }

    //},[listContacts])
        


return ( 
<>

    <h1>Salut Millau </h1>
    <button onClick={getContact}>recup liste </button>
    {listContacts.map((contact, index)=>
    /*<div key={index}>

    <h2>{contact.firstname}</h2>
    <h2>{contact.lastname}</h2>
    </div>*/
    <Contact  key={index} contact={contact}/>

    )}
    
</>
)
}

export default MyApp