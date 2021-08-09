import { BrowserRouter, Switch, Route } from "react-router-dom";
import GiphyPage from "../page/Giphy";

function AppRouter(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={["/", "/home"]} exact={true}>
                    <GiphyPage v="home"/>
                </Route>
                <Route path="/search" exact={true}>
                    <GiphyPage v="search"/>
                </Route>
                <Route path="/trending" exact={true}>
                    <GiphyPage v="trending"/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;