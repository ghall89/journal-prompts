import Prompt from './components/Prompt.jsx';
import Footer from './components/Footer.jsx';

function App() {
	return (
		<div className="App">
			{/* <div className="backdrop">
				<img src="https://source.unsplash.com/random?calm" alt="" />
			</div> */}
			<h1>Mindfulness Prompts</h1>
			<Prompt />
			<Footer />
		</div>
	);
}

export default App;
