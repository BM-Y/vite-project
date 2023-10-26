import {useState}from 'react'

    export function Age({birthdate}){

        const birthday = new Date (birthdate)
        const today = Date.now()
        /*const diff = parseInt((today-birthday)/(1000*3600*24*365.25))solution mathematique */

        const age = moment 




        return <span>{diff}
        </span>
    }