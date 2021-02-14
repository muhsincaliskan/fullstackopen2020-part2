const Persons = ({persons,handleDelete}) => (
    
    persons.map((person,index) => 
      <p key={index}>{person.name} {person.number} <button type="submit" onClick={()=>handleDelete(person)} >delete</button> </p>
    )
  
)
  export default Persons