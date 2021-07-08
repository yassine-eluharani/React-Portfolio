import Sidebar from './Components/Sidebar'
import HomePage from './Pages/HomePage'
import WorksPage from './Pages/WorksPage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <MainContent>
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
  
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/works' exact>
              <WorksPage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>  
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
          </Switch>

        </MainContent>
      </div>
    </Router>
  );
}

const MainContent = styled.div`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }

`

export default App;
