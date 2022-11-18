import { useEffect } from "react"
import { useState } from "react"


const initialState = {
    fecha: new Date(),
         edad: 0,
         nombre:' Martín',
         apellidos: 'San José'
}


const ClockFunctionComponent = () => {

    const [state, setState] = useState(initialState)
    console.log(state)



    useEffect(() => {
        // Anything in here is fired on component mount.
        const trick = () => setState((prevState)=> {
            let edad = prevState.edad +1
            return{
              ...prevState,
              fecha: new Date(),
              edad
            }   
          })
          
        const timeId = setInterval(()=> trick(), 1000)

        return () => {
            // Anything in here is fired on component unmount.
            clearInterval(timeId)
        }
    },[])



  return (
    <div><h2>{state.nombre}</h2>
        <h3>age: {state.edad}</h3>
      <h3> time : {state.fecha.toLocaleTimeString()} </h3>
     </div>
  )
}

export default ClockFunctionComponent