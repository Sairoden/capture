// Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import Nav from "./components/Nav";

import GlobalStyle from "./components/GlobalStyle";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs></AboutUs>
          </Route>
          <Route path="/work" exact>
            <OurWork></OurWork>
          </Route>
          <Route path="/work/:id">
            <MovieDetail></MovieDetail>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
