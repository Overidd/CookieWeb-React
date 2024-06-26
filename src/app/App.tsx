// import { useState } from 'react'
import {Route, Switch } from "wouter";
import {Home} from './home'
import { Detalle } from "./Detalle";

function App() {

   // const [count, setCount] = useState(0)

   return (
      <>
         <Switch>
            <Route path="/" component={Home} />
            <Route path="/detalle" component={Detalle} />
            {/* <Route path="/formularios" component={Formularios} /> */}
            {/* Default route in a switch */}
            <Route>404: No se encontro la pagina!</Route>
         </Switch>

      </>
   )
}

export default App
