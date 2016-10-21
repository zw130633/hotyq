import React, { Component } from 'react'

const style = require('../../../../../style/about_team')

class TeamIntroduction extends Component {
  render() {
    return (
      <div className={style.teamIntroduction}>
      		<div className={style.founderBox}>
      				<img src={`${imgUrl}/BZ.jpg`} />
      				<div className={style.foundertxt}>
      						<h2>创始人&董事长<br/>鲍啸峰</h2>
      						<p>连续创业者，创业8年，现任首都文化产业协会常务理事，2008年教育部北京市大学生创业典型，“君和天下”知识产权和战略咨询创始人，曾任“腾讯”、“百度”、“优酷”、“乐视”、“大姨吗”“小麦公社”、“蜜芽宝贝”等知名互联网企业知识产权和公共关系顾问。</p>
      				</div>
      		</div>
      		<div className={style.founderBox}>
      				<div className={style.foundertxt}>
      						<h2>联合创始人&CEO<br/>姜海</h2>
      						<p>中国农业大学管理专业学士、文化部国家网络文化标准化委员会委员、参与创办音乐网站ting365.com；投资创立闪客帝国，引入ADOBE投资；参与创办君和天下知识产权和战略咨询公司，任高级合伙人。拥有超过10年的互联网和娱乐项目运作经验。</p>
      				</div>
      				<img src={`${imgUrl}/JZ.jpg`} style={{float:'right'}}/>
      		</div>
      		<ul className={style.staffBox}>
      				<li>
      					<img src={`${imgUrl}/SY.jpg`} />
	      				<div className={style.stafftxt}>
	      						<h3>产品VP<br/>申悦</h3>
	      						<p>从事产品经理5年，具有开发和UI设计经验，历任中兴通讯开发工程师，网易、e代驾高级产品经理。拥有通信设备制造、云计算、移动互联网、O2O行业经验。</p>
	      				</div>
      				</li>
      				<li>
      					<img src={`${imgUrl}/WC.jpg`} />
	      				<div className={style.stafftxt}>
	      						<h3>红蜜副总裁<br/>王朝</h3>
	      						<p>毕业于UIBE，连续创业者。创业是一种心态，我一直在路上。</p>
	      				</div>
      				</li>
      				<li>
      					<img src={`${imgUrl}/CR.jpg`} />
	      				<div className={style.stafftxt}>
	      						<h3>设计总监<br/>陈锐</h3>
	      						<p>从事广告设计期间，服务过三星、联想HTC、中粮、奔驰等客户。从事视频包装相关设计，服务过CCTV3、CCTV9、BTV等相关栏目。</p>
	      				</div>
      				</li>
      				<li>
      					<img src={`${imgUrl}/LX.jpg`} />
	      				<div className={style.stafftxt}>
	      						<h3>CTO<br/>李鑫</h3>
	      						<p>曾任职于用友，担任近4年的项目经理，在煤炭运销／质量文件管控／教育等多个行业领域带领研发。团队，均以用户满意度满分完成各个大型项目。</p>
	      				</div>
      				</li>
      		</ul>
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

module.exports = TeamIntroduction
