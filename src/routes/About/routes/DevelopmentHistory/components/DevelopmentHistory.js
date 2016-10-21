import React, { Component } from 'react'

class DevelopmentHistory extends Component {
  render() {
		const style = require('../../../../../style/history')
    return (
      <div className={style.container}>
        <div className={style.content}>
        	<div className={style.month}>8月</div>
        	<p>红演圈公司和新媒诚品公司（股票代码：834522）合资成立新媒红贩（北京）网络科技有限公司，运营线上线下一体化的影视 I 交易平台红贩，同月，红贩App上线。</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>7月</div>
        	<p>由红演圈投资并联合出品的网络大电影《死神的假期》，腾讯视频独播不到一个月点击量超过四千万</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>7月</div>
        	<p>红蜜北京线下体验旗舰店开业，地址位于北京市朝阳区双井地区</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>6月</div>
        	<p>红演圈公司旗下第二款产品红蜜客户端（订阅号）、红蜜艺人端（App）上线。红蜜，是专注为大众提供演艺服务的综合商城</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>6月</div>
        	<p>第十二届瑞丽模特大赛开辟红演圈绿色通道，为瑞丽模特大赛八大赛区输送选手。同年8月，红演圈赛区晋级2位选手参加瑞丽模特养成计划并有机会最终进入10强</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>5月</div>
        	<p>红演圈通过中国国际数码互动娱乐展览会认证，获得2016 China Joy指定经纪公司资格</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>5月</div>
        	<p>由微博牵头，联手乐视影业、猎聘网、新东方在线等100家企业，共同成立中国校园市场联盟。红演圈同微博校园、乐视影业、支付宝、OPPO等企业共同挂牌联席主席单位</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>2月</div>
        	<p>红演圈联合微博校园、腾讯视频、女神TV共同举办校园艺人排行榜活动，为有演艺梦想的校园艺人提供展示平台</p>
        </div>
        <div className={style.yearContent}>
        	<div className={style.year}><div>2016</div></div>
        </div>
        <div className={style.content}>
        	<div className={style.month}>12月</div>
        	<p>红演圈获赛马资本A轮2100万人民币投资</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>11月</div>
        	<p>红演圈与CCTV6电影频道1905电影网达成战略合作，共同组建运营公司。红演圈控股，运营电影网“优才计划”</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>10月</div>
        	<p>红演圈成为世界超模中国冠军赛海选北京赛区官方合作平台</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>9月</div>
        	<p>红演圈（亚洲）有限公司在香港成立，布局港澳台和日韩娱乐艺人。香港亚洲电视指定红演圈为第27届ATV2015亚洲小姐竞选中国内地海选官方合作平台</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>8月</div>
        	<p>红演圈联合Chinajoy主办方汉威信恒，开展2015 China Showgirl网络海选暨年度盛典活动，千余名showgirl报名，数百万网友投票</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>5月</div>
        	<p>红演圈App iOS 1.0、Android 1.0正式上线。红演圈是一款具有社交功能的演艺圈“智联招聘”</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>5月</div>
        	<p>红演圈App iOS 1.0、Android 1.0正式上线。红演圈是一款具有社交功能的演艺圈“智联招聘”</p>
        </div>
        <div className={style.content}>
        	<div className={style.month}>4月</div>
        	<p>获海通证券1400万天使轮投资</p>
        </div>
        <div className={style.yearContent}>
        	<div className={style.year}><div>2015</div></div>
        </div>
        <div className={style.content}>
        	<div className={style.month}>10月</div>
        	<p>创始人鲍啸峰、姜海、大姨吗CEO柴可等人筹资120万，红演圈（北京）网络科技有限公司成立</p>
        </div>
        <div className={`${style.yearContent} ${style.lastYearContent}`}>
        	<div className={style.year}><div>2014</div></div>
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

module.exports = DevelopmentHistory
