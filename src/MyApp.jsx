

import {useEffect,useState }from "react"


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
    <h2 key={index}>{contact.birthday}</h2>
    )}
    
</>
)
}

export default MyApp