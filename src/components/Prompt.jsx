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
		localStorage.setItem('mindfullnessPrompts', JSON.stringify(history));
	}, [history]);

	useEffect(() => {
		setHistory([...history, prompt]);
	}, [prompt]);

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
