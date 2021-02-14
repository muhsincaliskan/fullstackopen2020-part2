import React from 'react'
const Filter = (props) => (

 
        <div>
            Filter shown with: <input type="text" value={props.value} onChange={props.handleFilterChange} />
        </div>
 
)

export default Filter;