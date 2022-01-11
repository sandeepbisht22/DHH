import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import About from "./component/pages/About";
import { Provider } from "react-redux";
import Login from "./component/auth/Login";
import SignUp from "./component/auth/SignUp";
import PrivateRoute from "./component/routing/PrivateRoute";
import Alerts from "./component/layout/Alerts";
import Test from "./component/Test";
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
import Rapper from "./component/pages/creators/artist/Rapper";
import Artists from "./component/pages/creators/artist/all/Artists";
import Labels from "./component/pages/labels/Labels";
import Home from "./component/pages/home/Home";
import Footer from "./component/layout/Footer";
import User from "./component/pages/user/User";
import UserDetails from "./component/pages/user/UserDetails";
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
                <Route path="/creators" element={<Creators />}></Route>
                <Route path="/promoters" element={<Promoters />}></Route>
                <Route path="/creators/:artisttype" element={<Artists />} />
                <Route path="/creators/mixmasters" element={<MixMasters />} />
                <Route path="/labels" element={<Labels />} />

                <Route
                  path="/promoters/reactionchannels"
                  element={<ReactionChannels />}
                />
                <Route path="/promoters/blogs" element={<Blogs />} />
                <Route
                  path="/promoters/instagrampages"
                  element={<InstagramPages />}
                />
                <Route
                  path="/promoters/newschannels"
                  element={<NewsChannels />}
                />

                <Route
                  path="/creators/rappers/:rapper"
                  element={<PrivateRoute component={Rapper} />}
                />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/test" element={<Test />} />
                <Route path="/user" element={<User />} />
                <Route path="/user/edit" element={<UserDetails />} />

                <Route path="/creators/director" element={<Director />}></Route>

                {/* {CreatorRoutes} */}

                {PromoteRoutes}
              </Routes>
              <Footer />
            </Fragment>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
