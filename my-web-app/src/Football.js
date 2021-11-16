import React from 'react'  
class Football extends React.Component {  

	handleClick = () => {
    	alert("Great Shot!");
  	}
  	
  	render() {  
    return (
    <button onClick={this.handleClick}>Take the shot!</button>
 	);
  }  
}  
export default Football