import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./App.css";
// import Homepage from './pages/HomePage/HomePage'
import Experience from "./pages/Experience/Experience";
import Pages from "./pages/Pages";

function App() {
	return (
		<Router>
			<Suspense fallback={<div></div>}>
				<Switch>
					<Route path="/" component={Pages} />
					{/* <Route path="/experience" exact component={Experience} /> */}
					{/* <Link to="#experience" /> */}
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
