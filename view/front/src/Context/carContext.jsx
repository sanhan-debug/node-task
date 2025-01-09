// import React, { Children, useEffect, useState } from 'react'
// import { createContext } from 'react'
// import axios from 'axios'
// export const carContext = createContext()


// function CarProvider({ children }) {

//     let [data, setData] = useState([])

//      function getData() {
//         axios.get("http://localhost:3001/cars/")
//             .then((res) => setData(res.data))
//     }

//     useEffect(() => {
//         getData()
//     }, [])

//     let value = {
//         data,
//         setData
//     }

//     return (
//         <carContext.Provider value={value} >{children}</carContext.Provider>
//     )
// }


// export default CarProvider;