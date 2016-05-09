import React from 'react'

 let test =  (a) => { 
  console.log('a=',a);
 }

const Home = (props) => {
  console.log('Home props = ',props);
 return (<div><h1 style={{'color':props.color}} onClick={test.bind(this,'123')}>TestHome</h1></div>);
}
export default Home
