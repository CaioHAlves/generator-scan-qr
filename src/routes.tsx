import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { QRGenerator, QRScanner } from './pages'

export function Rotas() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={QRGenerator} />
        <Route exact path="/scanner" component={QRScanner} />
      </Switch>
    </BrowserRouter>
  )
}

export default Rotas;
