import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Rappers from "./component/Artist/rappers/Rappers";
import Rapper from "./component/Artist/rappers/Rapper";
import { Provider } from "react-redux";
import BeatProducers from "./component/Artist/beat Producer/BeatProducers";
import ReactionChannels from "./component/reaction Channel/ReactionChannels";
import BeatProducer from "./component/Artist/beat Producer/BeatProducer";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div style={{ backgroundColor: "#272727" }}>
          <Router>
            <Fragment>
              <Navbar></Navbar>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/artist/rappers" component={Rappers} />
                <Route
                  exact
                  path="/artist/beatproducers"
                  component={BeatProducers}
                />
                <Route
                  exact
                  path="/reactionChannels"
                  component={ReactionChannels}
                />
                <Route
                  exact
                  path="/artist/rappers/:rapper"
                  component={Rapper}
                />
                <Route
                  exact
                  path="/artist/beatproducers/:beatProducer"
                  component={BeatProducer}
                />
              </Switch>
            </Fragment>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
