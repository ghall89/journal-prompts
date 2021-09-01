import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../res/Modal.css';

const History = props => {
	const customStyles = {
		content: {
			inset: '10px',
			maxHeight: '660px',
			maxWidth: '500px',
			margin: 'auto',
			border: 'none',
			boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
			borderRadius: '6px'
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
				<div className="modalScroll">
					<ul>
						{props.data.history
							.slice(0)
							.reverse()
							.slice(0, 15)
							.map(item => (
								<li key={Math.random()}>{item}</li>
							))}
					</ul>
				</div>
				<div>
					<button className="modalBtn" onClick={props.data.closeModal}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default History;
