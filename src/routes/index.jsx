import { useEffect } from "react"
import { useState } from "react"
import { Route, Switch } from "react-router-dom"
import Form from "../pages/Form"
import User from "../pages/User"


export const Routes = () =>{
    const [user, setUser]=useState({})
    
    return(
        <Switch>
            <Route exact path="/">
                <Form user={user} setUser={setUser}/>
            </Route>
            <Route path="/user/:name" >
                <User user={user}/>
            </Route>
        </Switch>
    )
}