import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const History = props => {
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			maxHeight: '70%'
		}
	};

	return (
		<div>
			<Modal
				isOpen={props.data.modalIsOpen}
				onRequestClose={props.data.closeModal}
				style={customStyles}
				ariaHideApp={false}
				contentLabel="Prompt History"
			>
				<div>
					<button
						className="promptBtn modalBtn"
						onClick={props.data.closeModal}
					>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</div>
				<h3>Prompt History</h3>
				<div className="modalScroll">
					<ul>
						{props.data.history
							.slice(0)
							.reverse()
							.map(item => (
								<li key={Math.random()}>{item}</li>
							))}
					</ul>
				</div>
			</Modal>
		</div>
	);
};

export default History;
