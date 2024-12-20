import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Coins"
import Coin from "./routes/Coin"


function Router() {
    return <BrowserRouter basename="/CoinTrackerClone">
        <Switch>
            <Route path="/:coinId">
                <Coin />
            </Route>
            <Route exact path="/">
                <Coins />
            </Route>
        </Switch>
    </BrowserRouter>
}
export default Router;