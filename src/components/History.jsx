import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const History = props => {
	return (
		<div>
			<Modal
				isOpen={props.data.modalIsOpen}
				onRequestClose={props.data.closeModal}
				ariaHideApp={false}
				contentLabel="Prompt History"
				closeTimeoutMS={300}
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
