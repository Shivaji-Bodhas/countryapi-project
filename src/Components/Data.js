import React,{ useEffect, useState } from 'react'
import Country from './Country'

export default function Data() {
 
    const [countryData,setCountryData] = useState([])
    const fetchData = () =>{
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setCountryData(data)
                console.log("3",countryData)
            })
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='m-3 d-flex flex-wrap'>
        {
             countryData.map(cData =>{
                 return (
                <Country
                 lang={(cData.languages)? cData.languages:{}}
                 name={cData.name.official}
                 capital={cData.capital}
                 cname={cData.name.common}
                 continents={cData.continents}

                 
                   
                    />
                 )
             })
        
        }
    </div>
  )
}
