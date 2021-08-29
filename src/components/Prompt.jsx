import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faHistory } from '@fortawesome/free-solid-svg-icons';

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
				<div className="card promptBody">
					<p className="promptText">{prompt}</p>
				</div>
				<button onClick={choosePrompt}>
					<FontAwesomeIcon icon={faSyncAlt} /> Generate New Prompt
				</button>
				<button onClick={openModal}>
					<FontAwesomeIcon icon={faHistory} /> Recent Prompts
				</button>
			</div>
			<History data={{ modalIsOpen, setIsOpen, closeModal, history }} />
		</>
	);
};

export default Prompt;
