import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faHistory } from '@fortawesome/free-solid-svg-icons';

import Prompts from '../data/prompts.json';

const Prompt = () => {
	const [prompt, setPrompt] = useState(
		Prompts[Math.floor(Math.random() * Prompts.length)]
	);

	const [history, setHistory] = useState(
		localStorage.mindfullnessPrompts
			? JSON.parse(localStorage.mindfullnessPrompts)
			: [prompt]
	);

	useEffect(() => {
		localStorage.setItem('mindfullnessPrompts', JSON.stringify(history));
	});

	const choosePrompt = () => {
		const newPrompt = Prompts[Math.floor(Math.random() * Prompts.length)];
		setPrompt(newPrompt);
		setHistory([...history, newPrompt]);
	};

	const displayHistory = () => {
		console.log(history);
	};

	return (
		<div className="promptArea">
			<div className="card">
				<p className="promptText">{prompt}</p>
			</div>
			<button className="promptBtn" onClick={choosePrompt}>
				<FontAwesomeIcon icon={faSyncAlt} /> Generate New Prompt
			</button>
			<button className="promptBtn" onClick={displayHistory}>
				<FontAwesomeIcon icon={faHistory} /> Previous Prompts
			</button>
		</div>
	);
};

export default Prompt;
