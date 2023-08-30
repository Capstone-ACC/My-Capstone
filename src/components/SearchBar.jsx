import React from 'react'
import './Main-SearchBar.css'

export default function SearchBar({value, onChange}) {

  return (
    <>
     <div className="searchBar">
        <input 
            type="text"
            placeholder="Search for item"
            value={value}
            onChange={(e) => onChange(e.target.value)}/>
    </div>
</>
  )
}



