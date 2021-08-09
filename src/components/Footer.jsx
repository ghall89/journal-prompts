import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<footer>
			<p>
				Made with <FontAwesomeIcon icon={faHeart} /> by{' '}
				<a href="https://ghall.dev">Graham Hall</a>.
			</p>
		</footer>
	);
};

export default Footer;
