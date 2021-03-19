import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AdvStatistics from './components/AdvStatistics';
import BoostJumbo from './components/BoostJumbo';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<AdvStatistics />
			<BoostJumbo />
			<Footer />
		</div>
	);
}

export default App;
