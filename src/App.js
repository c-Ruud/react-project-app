import {Route, Switch} from 'react-router-dom'

import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPages from "./pages/Favorites";
import AllMeetupsPages from "./pages/AllMeetups";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <AllMeetupsPages/>
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupPage/>
                </Route>
                <Route path='/favorites'>
                    <FavoritesPages/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
