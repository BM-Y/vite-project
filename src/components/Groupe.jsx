import {useState}from 'react'



export function Groupe({group}){

 const [listGroups, setlistGroups]= useState()

       fetch('http://localhost:8000'+{group})

                .then((res)=>res.json())
                .then((data)=>setlistGroups(data.name))


        return  <span>{listGroups}</span>

}     