import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ModalEl = props => {
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)'
		}
	};

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00';
	}

	// Modal.setAppElement('#yourAppElement');

	return (
		<div>
			<Modal
				isOpen={props.data.modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={props.data.closeModal}
				style={customStyles}
				class="card"
				contentLabel="Example Modal"
			>
				<button class="promptBtn" onClick={props.data.closeModal}>
					<FontAwesomeIcon icon={faTimes} />
				</button>
				<h3>Prompt History</h3>
				<ul>
					{props.data.history.reverse().map(item => (
						<li>{item}</li>
					))}
				</ul>
			</Modal>
		</div>
	);
};

export default ModalEl;
