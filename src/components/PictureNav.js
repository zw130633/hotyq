import React, { Component } from 'react'
import { Link,browserHistory } from 'react-router'

class PictureNav extends Component {
  render() {
  	const style = require('../style/home.page')
    return (
      <div className={style.pictureNav}>
        <Link to="/hotyq" >
        	<img src = {`${imgUrl}/hotyq.png`} />
        </Link>
	    	<Link to="/hotmi" >
        	<img src = {`${imgUrl}/hotmi.png`} />
        </Link>
	    	<Link to="/hotfan" >
	    		<img src = {`${imgUrl}/hotfan.png`} />
	    	</Link>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
  }
  componentDidMount() {
  	
  }
}
export default PictureNav
