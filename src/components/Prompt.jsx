import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

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
				<FontAwesomeIcon icon={faSyncAlt} /> Generate Prompt
			</button>
		</div>
	);
};

export default Prompt;
