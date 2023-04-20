import { useContext, useState } from "react"
import Context from "../Context"

export default function MengeContext({ children }) {
   let [data, setDate] = useState();


   return (
      <Context.Provider value={{data, setDate}}>
         {children}
      </Context.Provider>
   )
}