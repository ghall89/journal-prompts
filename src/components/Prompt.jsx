import { useEffect, useState } from 'react';
import Prompts from '../data/prompts.json';

const Prompt = () => {
	const [prompt, setPrompt] = useState('Hello there!');

	const choosePrompt = () => {
		const newPrompt = Prompts[Math.floor(Math.random() * Prompts.length)];
		setPrompt(newPrompt);
	};

	return (
		<div className="promptArea">
			<div className="card">
				<p className="promptText">{prompt}</p>
			</div>
			<button className="promptBtn" onClick={choosePrompt}>
				Generate Prompt
			</button>
		</div>
	);
};

export default Prompt;
