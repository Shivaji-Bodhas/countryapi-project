import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Data from './Data'

export default function NavBar() {
  let [search,setSearch]=useState("")
    let liststyle={
        textDecoration:"none"
    }
  return (
    <div>
<ul>
    <li><Link to="/Data" style={liststyle}>Country of World</Link></li>
    <li><Link to="/About" style={liststyle}>About</Link></li>
</ul>
<div className='country'>
<h1>Search for a country</h1>
        <input type='search' placeholder='enter country name' onChange={e=>setSearch(e.target.value)}/><button>Search</button>
    </div>
    </div>
  )
}
