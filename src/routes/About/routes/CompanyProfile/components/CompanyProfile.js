import React, { Component } from 'react'
import Nav from '../../../components/Nav'

class CompanyProfile extends Component {
  render() {
  	const style = require('../../../../../style/about')
    return (
      <div className={style.companyProfile}>
        <p>红演圈App是服务于艺人和艺人需求方的信息平台，既为艺人提供全国的演艺培训信息、赛事信息、主播平台信息、影视剧组讯等通告信息，也为艺人需求方提供各品类的艺人信息。</p>
        <p>红蜜（微信公众号）是线上线下一体化的综合演艺商城，通过筛选成熟的专业优质艺人，为广大消费者提供演艺服务。微信搜索红蜜即可进入在线商城下单，红蜜北京旗舰店位于朝阳区双井地区，全国加盟店陆续开设中。</p>
        <p>红贩App是线上线下一体化的影视IP信息平台，服务于版权方和投资方，通过线上相关版权信息的审核和曝光、线下拍卖会的形式，提高行业版权交易效率。</p>
        <p>公司目前业务遍及北京、上海、广州、深圳、武汉、天津、大连、杭州、南京、厦门、成都、青岛、重庆等十余个城市。</p>
        <div className={style.title}><span>所获荣誉奖项</span></div>
        <div className={style.award}>
        	<div>
	        	<a href='http://img.hotyq.com/new-index/image/1.jpg' target='_blank'><img src={`${imgUrl}/award_1.png`} /></a>
	        	<a href='http://img.hotyq.com/new-index/image/2.jpg' target='_blank'><img src={`${imgUrl}/award_2.png`} /></a>
	        	<a href='http://img.hotyq.com/new-index/image/3.jpg' target='_blank'><img src={`${imgUrl}/award_3.png`} /></a>
	        </div>
	        <div>
	        	<a href='http://img.hotyq.com/new-index/image/4.jpg' target='_blank'><img src={`${imgUrl}/award_4.png`} /></a>
	        	<a href='http://img.hotyq.com/new-index/image/5.jpg' target='_blank'><img src={`${imgUrl}/award_5.png`} /></a>
	        	<a href='http://img.hotyq.com/new-index/image/6.jpg' target='_blank'><img src={`${imgUrl}/award_6.png`} /></a>
	        </div>
        </div>
        <div className={style.title}><span>创始人寄语</span></div>
        <div className={style.sendWord} style={{backgroundImage:`url(${imgUrl}/sendWord.png)`}}>
        	<p>红演圈是演艺圈的信息平台，我们做这个平台的目的就是要打通圈内的信息流动，让艺人和圈内人士有可靠，准确的信息获得渠道，艺人不用担心通告数量和质量，需求方不需要为找不到不同类别好艺人发愁。不仅仅是接通告，找艺人。我们要用科技改变娱乐圈信息交流，构建全球演艺人才市场，助力中国青年演艺梦想。</p>
        	<span>鲍啸峰</span>
        </div>
      </div>
    )
  }
  componentDidMount() {
  	$('#aboutLink').addClass('active')
  }
  componentWillUnmount(){
  	$('#aboutLink').removeClass('active')
  }
}

module.exports = CompanyProfile
