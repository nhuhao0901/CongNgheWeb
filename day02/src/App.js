import './App.css';
import {BrowserRouter } from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import {About} from './Component/About';
import {ClickMe} from './Component/ClickMe';
import {News} from './Component/News';
import {MenuNgang} from './Component/MenuNgang';
import {Counter} from './Component/Counter';
import {MyContextProvider} from './context/MyContext';
function App() {
  return (
    <div className="App">
    <MyContextProvider>
    
      <BrowserRouter>
      <MenuNgang />
        <Switch>
          <Route path="/about" component= {About} />
          <Route path="/counter" component= {Counter} />
          <Route path="/click-me" component= {ClickMe}/>
          <Route path="/news" component= {News}/>

        </Switch>
      </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;
