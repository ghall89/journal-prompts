import Parts from '../data/prompts.json';

const generatePrompt = () => {
	const newPrompt = [];
	const format = Parts[Math.floor(Math.random() * Parts.length)];
	for (let i = 0; i < format.length; i++) {
		const output = format[i][Math.floor(Math.random() * format[i].length)];
		newPrompt.push(output);
	}

	return newPrompt.join(' ') + '...';
};

export default generatePrompt;
