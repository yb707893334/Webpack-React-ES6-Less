import React from 'react';
import Img from '../images/1.png';
import mixin from './mixin';

export default  React.createClass ({
	mixins: [mixin],
	render() {
		return(
			<div>
		 		<h1 className = "reactH1" > 新闻列表页 </h1>
		 		<img src={Img}/>
		 		<h2>123</h2>
	 		</div>
	 	)	
	}
})