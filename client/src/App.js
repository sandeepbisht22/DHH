import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Rappers from "./component/Artist/rappers/Rappers";
import Rapper from "./component/Artist/rappers/Rapper";
import { Provider } from "react-redux";
import BeatProducers from "./component/Artist/beat Producer/BeatProducers";
import BeatProducer from "./component/Artist/beat Producer/BeatProducer";
import Login from "./component/auth/Login";
import SignUp from "./component/auth/SignUp";
import PrivateRoute from "./component/routing/PrivateRoute";
import Alerts from "./component/layout/Alerts";
import Test from "./component/Test";
import User from "./component/pages/User";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Creators, { CreatorRoutes } from "./component/pages/creators/Creators";
import Promoters, {
  PromoteRoutes,
} from "./component/pages/promoters/Promoters";
import Director from "./component/pages/creators/director/Director";
import MixMasters from "./component/pages/creators/mixmaster/MixMasters";
import Blogs from "./component/pages/promoters/Blogs/Blogs";
import InstagramPages from "./component/pages/promoters/instagramPages/InstagramPages";
import NewsChannels from "./component/pages/promoters/newsChannels/NewsChannels";
import ReactionChannels from "./component/pages/promoters/reactionChannels/ReactionChannels";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div style={{}}>
          <Router>
            <Fragment>
              <Navbar></Navbar>
              <Alerts></Alerts>
              <Routes>
                <Route path="/" element={<PrivateRoute component={Home} />} />
                {/* <PrivateRoute path="/" element={<Home />} /> */}
                <Route
                  path="/about"
                  element={<PrivateRoute component={About} />}
                />
                <Route exact path="/creators/rappers" element={<Rappers />} />
                <Route
                  exact
                  path="/creators/mixmasters"
                  element={<MixMasters />}
                />

                <Route
                  exact
                  path="/promoters/reactionchannels"
                  element={<ReactionChannels />}
                />
                <Route exact path="/promoters/blogs" element={<Blogs />} />
                <Route
                  exact
                  path="/promoters/instagrampages"
                  element={<InstagramPages />}
                />
                <Route
                  exact
                  path="/promoters/newschannels"
                  element={<NewsChannels />}
                />

                <Route
                  exact
                  path="/creators/beatproducers"
                  element={<PrivateRoute component={BeatProducers} />}
                />

                <Route
                  exact
                  path="/artist/rappers/:rapper"
                  element={<PrivateRoute component={Rapper} />}
                />

                <Route
                  exact
                  path="/artist/beatproducers/:beatProducer"
                  element={<PrivateRoute component={BeatProducer} />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/test" element={<Test />} />
                <Route path="/user" element={<User />} />
                <Route path="/creators" element={<Creators />}></Route>
                <Route path="/promoters" element={<Promoters />}></Route>
                <Route
                  exact
                  path="/creators/director"
                  element={<Director />}
                ></Route>

                {/* {CreatorRoutes} */}

                {PromoteRoutes}
              </Routes>
            </Fragment>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
