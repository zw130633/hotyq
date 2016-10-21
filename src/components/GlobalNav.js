import React, { Component } from 'react'
import { Link } from 'react-router'
var path = require('path')

class GlobalNav extends Component {

  constructor(props, context) {
    super(props, context)
  }
	
	//<Link className='home nav' to="/" ><img src='http://127.0.0.1/hotyqkj_logo.jpg' /></Link>
  render() {
    const { user } = this.props
    return (
    	<div className='headerCon'>
	      <div className='header'>
		  	<Link className='home nav' to="/" ><img src={`${imgUrl}/hotyqkj_logo.png`} /></Link>
			  	<div>
			    	 	<Link className='nav' activeClassName='active' to="/hotyq" >红演圈</Link>
		        	<Link className='nav' activeClassName='active' to="/hotmi" >红蜜</Link>
		        	<Link className='nav' activeClassName='active' to="/hotfan" >新媒红贩</Link>
		        	<Link id='aboutLink' className='nav' activeClassName='active' to="/about/companyProfile" >关于我们</Link>
		        	<Link className='nav' activeClassName='active' to="/contact" >联系我们</Link>
			  	</div>
	      </div>
      </div>
    )
  }
}

export default GlobalNav