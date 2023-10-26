
import{Groupe} from'./Groupe.jsx'
import{Age} from'./Age.jsx'


export function Contact({contact}){

return (
<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{contact.lastname}{contact.firstname}</h5>
    <Groupe group={contact.grp}/>
    <Age birthdate={contact.birthdate} />
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
)
}