import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Reports, ReportsOne, ReportsTwo, ReportsThree} from './pages/Reports';
import Team from './pages/Team'
import { Messages, MessagesOne, MessagesTwo } from './pages/Messages';
import Products from './pages/Products';
import { Overview, OverviewOne, OverviewTwo } from './pages/Overview';

function App() {
    return (
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/overview' exact component={Overview} />
          <Route path='/overview/users' component={OverviewOne} />
          <Route path='/overview/revenue' component={OverviewTwo} />
          <Route path='/overview' exact component={Overview} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/reports/reports1'  component={ReportsOne} />
          <Route path='/reports/reports2'  component={ReportsTwo} />
          <Route path='/reports/reports3'  component={ReportsThree} />
          <Route path='/team' component={Team} />
          <Route path='/products' exact component={Products} />
          <Route path='/messages' exact component={Messages} />
          <Route path='/messages/message1' component={MessagesOne} />
          <Route path='/messages/message2' component={MessagesTwo} />
        </Switch>
      </Router>
    );
  }

export default App;
