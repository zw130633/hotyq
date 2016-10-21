import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { selectHomeList } from '../actions'
import HomeBanner from '../components/HomeBanner'
import PictureNav from '../components/PictureNav'
import Information from '../components/Information'
import GlobalNav from '../components/GlobalNav'
import BackTop from '../components/BackTop'
import Footer from '../components/Footer'

class HomePage extends Component {
  render() {
  	const { infoList, reportList } = this.props
  	const style = require('../style/home.page')
    return (
    	<div className={style.content}>
    		<HomeBanner />
    		<div className={style.main}>
    			<PictureNav />
    			<div className={style.informations}>
    				<Information title={`${imgUrl}/news_title.png`} list={reportList} type='report' />
    				<Information title={`${imgUrl}/message_title.png`} list={infoList} type='info' />
    			</div>
    			<img className={style.partnerTitle} src={`${imgUrl}/partner_title.png`} />
   				<img className={style.partner} src={`${imgUrl}/logo_home.jpg`} />
    		</div>
    		<BackTop />
    		<Footer />
    	</div>
    	
    )
  }
  constructor(props, context) {
    super(props, context)
    this.props.dispatch(selectHomeList())
  }
  componentWillReceiveProps(){
  	
  }
  componentWillMount(){
  	
  }
  componentDidMount() {
  	console.log('homepage did')
  }
}

function mapStateToProps(state, ownProps) {
	//console.log(state)
	console.log('mapStateToProps')
	console.log(state)
	const { selectHomeList } = state
	const infoList = selectHomeList.infoList || []
	const reportList = selectHomeList.reportList || []
	console.log(infoList)
  return {
  	infoList,
  	reportList
  }
}

export default connect(mapStateToProps)(HomePage)
