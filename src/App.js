// Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import Nav from "./components/Nav";

import GlobalStyle from "./components/GlobalStyle";

// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Switch>
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
    </div>
  );
}

export default App;
