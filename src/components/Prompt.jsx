import { useState, useEffect } from 'react';
import generatePrompt from '../helpers/generatePrompt';
import History from './History.jsx';
import TextTransition, { presets } from 'react-text-transition';

const Prompt = () => {
	const [modalIsOpen, setIsOpen] = useState(false);

	const [prompt, setPrompt] = useState(generatePrompt());

	const [history, setHistory] = useState(
		localStorage.mindfullnessPrompts
			? JSON.parse(localStorage.mindfullnessPrompts)
			: []
	);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		if (prompt !== history[history.length - 1]) {
			setHistory(history.concat(prompt));
			while (history.length > 15) {
				setHistory(history.splice(history.length - 14));
			}
		}
	}, [prompt, history]);

	useEffect(() => {
		localStorage.setItem('mindfullnessPrompts', JSON.stringify(history));
	}, [history]);

	const choosePrompt = () => setPrompt(generatePrompt());

	return (
		<>
			<div className="promptArea card">
				<div className="promptText">
					{/* <p>{prompt}</p> */}
					<TextTransition
						className="prompt"
						text={prompt}
						springConfig={presets.wobbly}
					/>
				</div>
				<button onClick={choosePrompt}>New Prompt</button>
				<button onClick={openModal}>Recent Prompts</button>
			</div>
			<History data={{ modalIsOpen, setIsOpen, closeModal, history }} />
		</>
	);
};

export default Prompt;
