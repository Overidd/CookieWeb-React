// import { useState } from 'react'
import './App.css'
import {Route, Switch } from "wouter";
import {Detalle,Home} from './vistas'


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
