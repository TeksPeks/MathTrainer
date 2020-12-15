import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import PlayPage from "./pages/PlayPage"
import RecordsPage from "./pages/RecordsPage"
import StartPage from "./pages/StartPage"

export function useRoutes() {
        return (
            <Switch>
                <Route path="/" exact>
                    <StartPage />
                </Route>
                <Route path="/play" exact>
                    <PlayPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
}