import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from '../../../components/Footer';


const style = require('../../../style/hotyq.scss');
require('../../../style/hotyqa.css');
export class Hotyq extends Component {
  render() {
    return (
    	  <div className="hotyqBox">
    	  <img className='backTop' src={`${imgUrl}/back_top.png`}  />
	        <div className="swiper-container">
			    <div className="swiper-wrapper">
			        <div className={`swiper-slide ${style.hotyqOne}`} style={{backgroundImage:`url(${imgUrl}/hotyqOne.jpg)`}}>
			            <div className={style.hotyqOne_cons}>
			                <div className={style.hotyqOneTit} style={{backgroundImage:`url(${imgUrl}/hotyqOneTit.png)`}} ref="abc"></div>
			                <div className="action">
			                		<div className="hotyqIphone" style={{backgroundImage:`url(${imgUrl}/hotyqIphone.png)`}} ref="bef"></div>
			                </div>
			                <div className={style.hotyqDownBox}>
			                		<div className={style.hotyqDownImg}>
			                		    <img src= {`${imgUrl}/hotyqDwonImg.jpg`} />
			                		</div>
			                		<a href="http://api.hotyq.com:8089/hotyq/outer/goto.do?outName=iosguanwanghotyq" >
			                		<div className={style.hotyqDownIphone}>
			                		    <img src= {`${imgUrl}/hotyqDwonIphone.png`} />
			                		</div>
			                		</a>
			                		<a href="http://img.hotyq.com/android_apk/hotyq_v4.apk" >
			                		<div className={style.hotyqDwonAddrio}>
			                		    <img src= {`${imgUrl}/hotyqDwonAddrio.png`} />
			                		</div>
			                		</a>
			                </div>
			                <div className={style.hotyqWordsBox} style={{backgroundImage:`url(${imgUrl}/hotyqOneWords.png)`}}>

			                </div>
			            </div>
			        </div>
			        <div className={`swiper-slide ${style.hotyqTwo}`} style={{backgroundImage:`url(${imgUrl}/hotyqTwo.jpg)`}}>
			            <div className={style.hotyqTwo_cons}>
			                <div className={style.hotyqTwoTit} style={{backgroundImage:`url(${imgUrl}/hotyqTwoTit.png)`}}></div>
			                <div className={style.hotyqTwoWordsBox}>
			                		<img className={style.hotyqTwoWords} src= {`${imgUrl}/hotyqTwoWords.png`} />
			                </div>
			                <div className="action">
				                <ul className="hotyqTwoPhotosBox">
				                		<li className="twoSlide_one"></li>
				                		<li className="twoSlide_two"></li>
				                		<li className="twoSlide_three"></li>
				                		<li className="twoSlide_four"></li>
				                		<li className="twoSlide_five"></li>
				                		<li className="twoSlide_six"></li>
				                		<li className="twoSlide_seven"></li>
				                		<li className="twoSlide_eight"></li>
				                		<li className="twoSlide_nine"></li>
				                		<li className="twoSlide_ten"></li>
				                		<li className="twoSlide_eleven"></li>
				                		<li className="twoSlide_twelve"></li>
				                </ul>
			                </div>
			            </div>
			        </div>
			        <div className={`swiper-slide ${style.hotyqThree}`} style={{backgroundImage:`url(${imgUrl}/hotyqThree.jpg)`}}>
			            <div className={style.hotyqThree_cons}>
			                <div className={style.hotyqThreeTit} style={{backgroundImage:`url(${imgUrl}/hotyqThreeTit.png)`}}></div>
			                <ul className="hotyqThreePhotosBox" style={{backgroundImage:`url(${imgUrl}/hotyqThreePhotos.png)`}}>
			                    <li className="hotyqThreePhotos_TopLeft">
			                        <div className="hotyqThreePhotos_TopLeft_one three_li">
			                            <div className="hotyqThreePhotos_bgBox">
			                                <div className="hotyqThreePhotos_bgWords">
				                                <p>大仙儿</p>
				                                <p>演员</p>
			                                </div>
			                                <div className="hotyqThreePhotos_bg"></div>
			                            </div>
			                        </div>
			                        <div className="hotyqThreePhotos_TopLeft_two three_li">
			                            <div className="hotyqThreePhotos_bgBox">
			                                <div className="hotyqThreePhotos_bgWords">
				                                <p>子涵</p>
				                                <p>演员</p>
			                                </div>
			                                <div className="hotyqThreePhotos_bg"></div>
			                            </div>
			                        </div>
			                        <div className="hotyqThreePhotos_TopLeft_three three_li">
			                            <div className="hotyqThreePhotos_bgBox">
			                                <div className="hotyqThreePhotos_bgWords">
				                                <p>李响</p>
				                                <p>演员</p>
			                                </div>
			                                <div className="hotyqThreePhotos_bg"></div>
			                            </div>
			                        </div>
			                    </li>
			                    <li className="hotyqThreePhotos_TopRight three_li">
			                        <div className="hotyqThreePhotos_bgBox">
		                                <div className="hotyqThreePhotos_bgWords">
			                                <p>跃飞</p>
			                                <p>演员</p>
		                                </div>
		                                <div className="hotyqThreePhotos_bg"></div>
		                            </div>
			                    </li>
			                    <li className="hotyqThreePhotos_bottomLeft">
			                        <div className="hotyqThreePhotos_bottomLeft_two three_li">
			                            <div className="hotyqThreePhotos_bgBox">
			                                <div className="hotyqThreePhotos_bgWords">
				                                <p>陈拐拐</p>
				                                <p>演员</p>
			                                </div>
			                                <div className="hotyqThreePhotos_bg"></div>
			                            </div>
			                        </div>
			                        <div className="hotyqThreePhotos_bottomLeft_three three_li">
			                            <div className="hotyqThreePhotos_bgBox">
			                                <div className="hotyqThreePhotos_bgWords">
				                                <p>玉儿</p>
				                                <p>演员</p>
			                                </div>
			                                <div className="hotyqThreePhotos_bg"></div>
			                            </div>
			                        </div>
			                        <div className="hotyqThreePhotos_bottomLeft_one three_li">
			                            <div className="hotyqThreePhotos_bgBox">
			                                <div className="hotyqThreePhotos_bgWords">
				                                <p>朱子琦</p>
				                                <p>演员</p>
			                                </div>
			                                <div className="hotyqThreePhotos_bg"></div>
			                            </div>
			                        </div>
			                    </li>
			                    <li className="hotyqThreePhotos_bottomRight">
			                        <div className="hotyqThreePhotos_bottomRight_one three_li">
			                            <div className="hotyqThreePhotos_bgBox">
			                                <div className="hotyqThreePhotos_bgWords">
				                                <p>阿肯</p>
				                                <p>演员</p>
			                                </div>
			                                <div className="hotyqThreePhotos_bg"></div>
			                            </div>
			                        </div>
			                        <div className="hotyqThreePhotos_bottomRight_two three_li">
			                            <div className="hotyqThreePhotos_bgBox">
			                                <div className="hotyqThreePhotos_bgWords">
				                                <p>瑜丽安娜</p>
				                                <p>演员</p>
			                                </div>
			                                <div className="hotyqThreePhotos_bg"></div>
			                            </div>
			                        </div>
			                        <div className="hotyqThreePhotos_bottomRight_three three_li">
			                            <div className="hotyqThreePhotos_bgBox">
			                                <div className="hotyqThreePhotos_bgWords">
				                                <p>小流</p>
				                                <p>演员</p>
			                                </div>
			                                <div className="hotyqThreePhotos_bg"></div>
			                            </div>
			                        </div>
			                        <div className="hotyqThreePhotos_bottomRight_four three_li">
			                            <div className="hotyqThreePhotos_bgBox">
			                                <div className="hotyqThreePhotos_bgWords">
				                                <p>崔凯琦</p>
				                                <p>演员</p>
			                                </div>
			                                <div className="hotyqThreePhotos_bg"></div>
			                            </div>
			                        </div>
			                        
			                    </li>
			                </ul>
			                <div className="action">
				                <div className="hotyqThreeHandBox">
				                    <img className={style.hotyqThreeHand} src= {`${imgUrl}/hotyqThreeHand.png`} />
				                </div>
			                </div>
			            </div>
			        </div>
			        <div className={`swiper-slide ${style.hotyqFour}`} style={{backgroundImage:`url(${imgUrl}/hotyqFour.jpg)`}}>
			            <div className={style.hotyqFour_cons}>
			                <div className={style.hotyqFourTit} style={{backgroundImage:`url(${imgUrl}/hotyqfourTit.png)`}}></div>
			                <div className="action">
				                <div className="hotyqFourHandBox">
				                    <img className={style.hotyqFourHand} src= {`${imgUrl}/hotyqFourHand.png`} />
				                </div>
			                </div>
			                <div className={style.hotyqFourPepoleBox}>
			                    <img className={style.hotyqFourPepole} src= {`${imgUrl}/hotyqFourPepole.png`} />
			                </div>
			            </div>
			        </div>
			        <div className={`swiper-slide ${style.hotyqFive}`} style={{backgroundImage:`url(${imgUrl}/hotyqFive.jpg)`}}>
			            <div className={style.hotyqFive_cons}>
			            		<div className={style.hotyqFiveTit} style={{backgroundImage:`url(${imgUrl}/hotyqFiveTit.png)`}}></div>
			                <div className="action">
			                		<div className="hotyqFiveConsLeft" style={{backgroundImage:`url(${imgUrl}/hotyqFiveConsleft.png)`}}></div>
			                	</div>
			                	<div className="action">
			            			<div className="hotyqFiveConsRight" style={{backgroundImage:`url(${imgUrl}/hotyqFiveConsRight.png)`}}></div>
			            		</div>
			            </div>
			        </div>
			        <div className={`swiper-slide ${style.hotyqSix}`} style={{backgroundImage:`url(${imgUrl}/hotyqSix.jpg)`}}>
			            <div className={style.hotyqSix_cons}>
					        <div className={style.hotyqSixTit} style={{backgroundImage:`url(${imgUrl}/hotyqSixTit.png)`}}></div>
					        <ul className="hotyqSixcons">
					            <li>
					                <div className="hotyqSixPhotos_bgBox">
		                                <div className="hotyqSixPhotos_bgWords">
			                                <p>校园艺人排行榜</p>
			                                <p>我懂你的不一样</p>
		                                </div>
		                                <div className="hotyqSixPhotos_bg"></div>
		                            </div>
					            </li>
					            <li>
					                <div className="hotyqSixPhotos_bgBox">
		                                <div className="hotyqSixPhotos_bgWords">
			                                <p>超女来了</p>
			                                <p>阔别十年,闪耀重启</p>
		                                </div>
		                                <div className="hotyqSixPhotos_bg"></div>
		                            </div>
					            </li>
					            <li>
					                <div className="hotyqSixPhotos_bgBox">
		                                <div className="hotyqSixPhotos_bgWords">
			                                <p>北京卫视综艺节目</p>
			                                <p>《周末嘻唰唰》来选角</p>
		                                </div>
		                                <div className="hotyqSixPhotos_bg"></div>
		                            </div>
					            </li>
					            <li>
					                <div className="hotyqSixPhotos_bgBox">
		                                <div className="hotyqSixPhotos_bgWords">
			                                <p>北京电影学院培训招生</p>
			                                <p>青春与梦想由此开始</p>
		                                </div>
		                                <div className="hotyqSixPhotos_bg"></div>
		                            </div>
					            </li>
					            <li>
					                <div className="hotyqSixPhotos_bgBox">
		                                <div className="hotyqSixPhotos_bgWords">
			                                <p>第二十七届</p>
			                                <p>ATV2015亚洲小姐竞选</p>
		                                </div>
		                                <div className="hotyqSixPhotos_bg"></div>
		                            </div>
					            </li>
					            <li>
					                <div className="hotyqSixPhotos_bgBox">
		                                <div className="hotyqSixPhotos_bgWords">
			                                <p>放胆秀色</p>
			                                <p>第十二届瑞丽模特大赛</p>
		                                </div>
		                                <div className="hotyqSixPhotos_bg"></div>
		                            </div>
					            </li>
					        </ul>
					   </div> 
			        </div>
			        <div className="swiper-slide hotyqEight" ref="aa" >
			            <div className="hotyqEight_cons">
					         <div className="hotyqEightTit" style={{backgroundImage:`url(${imgUrl}/hotyqEightTit.png)`}}></div>
					         <NavSectionEight />
					   	</div> 
				   		<div className="hotyqBottom">
				   		    <div className="hotyqBottom_cons">
				   		    		<div className="hotyqBottom_logo"></div>
				   		    		<div className="hotyqBottom_down">
				   		    		    <div className="hotyqBottom_down_img"></div>
				   		    		    <a href="http://api.hotyq.com:8089/hotyq/outer/goto.do?outName=iosguanwanghotyq"><div className="hotyqBottom_down_btn1"></div></a>
				   		    		    <a href="http://img.hotyq.com/android_apk/hotyq_v4.apk"><div className="hotyqBottom_down_btn2"></div></a>
				   		    		</div>
				   		    </div>
				   		</div>
				   		<Footer />
			        </div>
			    </div>
			    <div className={`swiper-pagination ${style.paginations}`} style={{position:'fixed',right:"-150px"}}></div>
			</div>
      </div>
    )
  }
  componentDidMount() {
  	    window.scrollTo(0,0)
  	    $('.backTop').hide();
  	    $('.action').hide().eq(0).show();
  	    var qq=this.refs.aa;
        var mySwipers = new Swiper ('.swiper-container', {
		    direction: 'vertical',
		    paginationClickable: true,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    mousewheelControl: true,
	    		keyboardControl : true,
	    		onSlideChangeStart:function(swiper){
			    	var tmpIndex=swiper.activeIndex;
			    	var action = document.getElementsByClassName("action");
        			console.log(swiper.activeIndex)
        			if(swiper.activeIndex == "4"){
        				$('.action').hide().eq(swiper.activeIndex).show();
        				$('.action').eq(swiper.activeIndex+1).show();
        			}else if(swiper.activeIndex == "5" || swiper.activeIndex == "6"){
        				$('.action').hide();
        			}else{
        				$('.action').hide().eq(swiper.activeIndex).show();
        			}
			    	if(tmpIndex==6){
			    		mySwipers.disableMousewheelControl();
			    		qq.scrollTop=2;
			    		mySwipersTwo.update()
			        	mySwipersTwo.slideTo(1, 0, false)
			    		document.body.onmousewheel = function(event) {
					    	event = event || window.event;
							    var top=qq.scrollTop;
							    console.log(event.wheelDelta)
							    if(top==0 && event.wheelDelta>0){
							    	mySwipers.enableMousewheelControl();
							    }
							};
							document.body.addEventListener("DOMMouseScroll", function(event) {
							    event = event || window.event;
							    var top=qq.scrollTop;
							    console.log(event.detail)
							    if(top==0 && event.detail==-3){
							    		mySwipers.enableMousewheelControl();
							    }
							});
			    	}
			    	if(tmpIndex==0){
		        		$('.backTop').hide();
		        }else{
		        		$('.backTop').fadeIn(600);
		        		$('.backTop').click(function(){
		        			swiper.slideTo(0, 400, false);
		        			mySwipers.enableMousewheelControl();
		        			$('.action').hide().eq(0).show();
		        			$('.backTop').fadeOut(600);
		        		})
		        	}
			}
		})
        var mySwipersTwo = new Swiper ('.swiper-containerTwo', {
		    direction: 'horizontal',
		    paginationClickable: true,
		    mousewheelControl: true,
        		keyboardControl : true,
            observer:true,
            loop:true,
            autoplayDisableOnInteraction: false,
        		nextButton: '.swiper-button-next',
    			prevButton: '.swiper-button-prev',
    			pagination: '.swiper-paginationEight'
		})
        $(".hotyqSixcons li").on({
        	    mouseover:function(){
        	    		$(this).find(".hotyqSixPhotos_bgBox").stop().animate({opacity:1},500)
        		},
        		mouseout:function(){
        	    		$(this).find(".hotyqSixPhotos_bgBox").stop().animate({opacity:0},500)
        		}
        })
        $(".three_li").on({
        	    mouseover:function(){
        	    		$(this).find(".hotyqThreePhotos_bgBox").stop().animate({opacity:1},500)
        		},
        		mouseout:function(){
        	    		$(this).find(".hotyqThreePhotos_bgBox").stop().animate({opacity:0},500)
        		}
        })
  }
}
var NavSectionEight= React.createClass({
  	render: function() {
  		return <div className ="bannerAreaTwo" style={{backgroundImage:`url(${imgUrl}/finallBanner_bj.png)`}}>
	  			   <div className="swiper-containerTwo">
					   <div className="swiper-wrapper">
					   		<div className="swiper-slide finallBanner_one" style={{backgroundImage:`url(${imgUrl}/finallBanner_one.jpg)`}}></div>
					   		<div className="swiper-slide finallBanner_two" style={{backgroundImage:`url(${imgUrl}/finallBanner_two.jpg)`}}></div>
					   		<div className="swiper-slide finallBanner_three" style={{backgroundImage:`url(${imgUrl}/finallBanner_three.jpg)`}}></div>
					   		<div className="swiper-slide finallBanner_four" style={{backgroundImage:`url(${imgUrl}/finallBanner_four.jpg)`}}></div>
					   		<div className="swiper-slide finallBanner_five" style={{backgroundImage:`url(${imgUrl}/finallBanner_five.jpg)`}}></div>
					   		<div className="swiper-slide finallBanner_six" style={{backgroundImage:`url(${imgUrl}/finallBanner_six.jpg)`}}></div>
					   		<div className="swiper-slide finallBanner_eight" style={{backgroundImage:`url(${imgUrl}/finallBanner_eight.jpg)`}}></div>
					   </div>
					   
				   </div>
				   <div className="swiper-paginationEight"></div>
				   <div className="swiper-button-prev"></div>
				   <div className="swiper-button-next"></div>
				</div>
				
  	}
});
module.exports = Hotyq
