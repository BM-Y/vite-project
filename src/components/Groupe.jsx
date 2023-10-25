import {useState }from 'react'



const [listGroups, setlistGroups]= useState([])

fetch('http://localhost:8000/api/group')

        .then((res)=>res.json())
        .then((data)=>setlistGroups(data['hydra:member']))

        return 

        {listGroups}