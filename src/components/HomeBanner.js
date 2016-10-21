import React, { Component } from 'react'
import { Link } from 'react-router'
require('../style/home.swiper')

class HomeBanner extends Component {
  render() {
  	const style = require('../style/home.page')
    return (
	    <div className="swiper-container home-swiper">
			    <div className="swiper-wrapper" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
			        <div className="swiper-slide">
			        	<Link to='/hotyq'><img src= {`${imgUrl}/banner_1.jpg`} /></Link>
			        </div>
			        <div className="swiper-slide">
			        	<Link to='/hotmi'><img src= {`${imgUrl}/banner_2.jpg`} /></Link>
			        </div>
			        <div className="swiper-slide">
			        	<Link to='/hotfan'><img src= {`${imgUrl}/banner_3.jpg`} /></Link>
			        </div>
			        <div className="swiper-slide">
			        	<a href='http://e.gmw.cn/2016-03/04/content_19173399.htm' target='_blank'><img src= {`${imgUrl}/banner_4.jpg`} /></a>
			        </div>
			        <div className="swiper-slide">
			        	<a href='http://cnews.chinadaily.com.cn/2016-04/21/content_24729504.htm' target='_blank'><img src= {`${imgUrl}/banner_5.jpg`} /></a>
			        </div>
			    </div>
			    <div className={`swiper-pagination ${style.swiperPagination}`}></div>
			    <div className="swiper-button-prev" ref='prevButton' onMouseOver={this.onMouseOver}></div>
				<div className="swiper-button-next" ref='nextButton' onMouseOver={this.onMouseOver}></div>
			</div>
    )
  }
  onMouseOver(){
  	let prevButton = this.refs.prevButton;
  	let nextButton = this.refs.nextButton;
  	prevButton.style.display='block';
  	nextButton.style.display='block';
  }
  onMouseOut(){
  	let prevButton = this.refs.prevButton;
  	let nextButton = this.refs.nextButton;
  	prevButton.style.display='none';
  	nextButton.style.display='none';
  }
  constructor(props, context) {
    super(props, context)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }
  componentDidMount() {
  	console.log(imgUrl)
    var mySwiper = new Swiper ('.swiper-container', {
	  	direction: 'horizontal',
	    loop: true,
	    autoplay:5000,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',
	    paginationBulletRender: function (index, className) {
		    return '<span class="' + className + '" style="background:#fff;"></span>';
		  },
	    paginationClickable :true,
	    
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    
	    // 如果需要滚动条
	    //scrollbar: '.swiper-scrollbar',
	  })
  }
}
export default HomeBanner
