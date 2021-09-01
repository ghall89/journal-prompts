import { useState, useEffect } from 'react';
import Prompts from '../data/prompts.json';
import History from './History.jsx';

const Prompt = () => {
	const [modalIsOpen, setIsOpen] = useState(false);

	const [prompt, setPrompt] = useState(
		Prompts[Math.floor(Math.random() * Prompts.length)]
	);

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

	const choosePrompt = () =>
		setPrompt(Prompts[Math.floor(Math.random() * Prompts.length)]);

	return (
		<>
			<div className="promptArea">
				<div className="promptText">
					<p>{prompt}</p>
				</div>
				<button onClick={choosePrompt}>New Prompt</button>
				<button onClick={openModal}>Recent Prompts</button>
			</div>
			<History data={{ modalIsOpen, setIsOpen, closeModal, history }} />
		</>
	);
};

export default Prompt;
