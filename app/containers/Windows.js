import React,{ PropTypes } from 'react'
import Window from '../components/mainwin';

const Win = (props) => {
   return (<Window />);
}

Win.propTypes = {
	color:PropTypes.string.isRequired,
	theme:PropTypes.string.isRequired,
}

Win.defaultProps = {
	color: '#cc7f29',
	theme: 'dark'
};


export default Win
// `'${}