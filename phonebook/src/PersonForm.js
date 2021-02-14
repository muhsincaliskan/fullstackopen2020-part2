const PersonForm = (props) => (

    <form onSubmit={props.addPerson}>
        <div>
            Name: <input value={props.newName} onChange={props.handleNameChange} required />
        </div>
        <div>
            Number: <input type='tel' value={props.newNumber} onChange={props.handleNumberChange} required />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
)

export default PersonForm;