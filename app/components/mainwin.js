import React,{ PropTypes } from 'react'
import { Window, TitleBar, Text } from 'react-desktop/lib/windows';
import Home  from './testhome';

const Mainwin = (props) => {
   console.log('mainwin defaultprops=',props);
  return (
      <Window
          color={props.color}
          theme={props.theme}
          chrome
          width="1000px"
          height="600px"
          padding="12px"
      >
          <Home  {...props} /><h1>{props.inpx}</h1>
          <input type="text" name="inpx" id="inputInpx"  onChange={ e => { props.inpx = Object.assing(props.inpx,e.target.value); } } defaultValue={props.inpx} value={props.inpx} />
          <TitleBar title="My Windows Application" controls/>
          <Text color={props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
      </Window>
  );
}

Mainwin.propTypes = {
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  inpx: PropTypes.string.isRequired,
}

Mainwin.defaultProps = {
    color: '#cc7f29',
    theme: 'dark',
    inpx:'',
};

export default Mainwin



