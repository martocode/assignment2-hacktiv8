import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Suspense } from 'react'
import './App.css';
// import Homepage from './pages/HomePage/HomePage'
import Pages from './pages/Pages';

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch >
          <Route path='/' component={Pages} />

        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
