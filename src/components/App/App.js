import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Items from '../Items/Items';
import Footer from '../Footer/Footer';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/items" component={Items} />
      <Route render={() => <h1>404: Page Not Found!</h1>} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
