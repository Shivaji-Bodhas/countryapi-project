import React from 'react'
export default function Country(props) {
  let {lang, name, capital,cname, continents}=props

  console.log("1",lang)
  let l=Object.values(lang)
  console.log("2",l)
  return (
    
        <div className="card m-3">
  {/* <ul className="list-group list-group-flush">
    <li className="list-group-item">Language:{l.join(",")}</li>  
     <li className="list-group-item">name:{name}</li>
    <li className="list-group-item">A third item</li> 
    
  </ul> */}
  <h1 style={{color:"black",backgroundColor:"gray"}}>{cname}</h1>
  <h3>capital:{capital}</h3>
  <h5>Language:{l.join(",")}</h5>
  <h2>official:{name}</h2>
  <h2>cont:{continents}</h2>
</div>

    
  )
}
