import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Rappers from "./component/Artist/rappers/Rappers";
import Rapper from "./component/Artist/rappers/Rapper";

import BeatProducers from "./component/Artist/beat Producer/BeatProducers";
import ReactionChannels from "./component/reaction Channel/ReactionChannels";

function App() {
  return (
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
            <Route exact path="/artist/rappers/:rapper" component={Rapper} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
