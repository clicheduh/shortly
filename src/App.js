import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdvStatistics from './components/AdvStatistics';
import Jumbotron from './components/Jumbotron';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<AdvStatistics />
			<Jumbotron />
		</div>
	);
}

export default App;
