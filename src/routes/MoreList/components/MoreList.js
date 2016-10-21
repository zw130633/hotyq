import React, { Component , PropTypes } from 'react'
import { Link , browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { selectMoreList } from '../../../actions'
import news from '../../../style/img/news_title.png'
import message from '../../../style/img/message_title.png'
import Footer from '../../../components/Footer'

//import { Pagination } from 'antd'
import '../../../style/antd.css'
import '../../../style/page.css'
//利用 babel-plugin-import 按需加载，减少 bundle size
const Pagination = require('antd/lib/pagination') 

class MoreList extends Component {
  constructor(props, context) {
		console.log('constructor')
    super(props, context)
    const { name , page } = this.props.params
    this.props.dispatch(selectMoreList(name,page))
    this.onPageChange = this.onPageChange.bind(this)
  }
  componentWillReceiveProps(){
  	
  }
  componentWillMount(){
  	//this.props.dispatch(selectMoreList(name,page))
  }
  render() {
  	const style = require('../../../style/more.list')
  	const name = this.props.params.name == 'report' ? '媒体报道' : '红演资讯'
  	const title = this.props.params.name == 'report' ? news : message
  	const { list , nowPage , totalCount , totalPage } = this.props
  	console.log(nowPage)
  	console.log(this.props)
    return (
      <div className={style.morelist}>
      	<p className={style.crumbs}><Link to='/'>首页</Link> > <span>{name}</span></p>
      	<div className={style.moreMain}>
      		<div className={style.moreInformation}>
				<img src={title}/>
				<div className={style.more}></div>
				<ul className={style.moreUl}>
			        {list.map((item, i) =>
			          <li className={style.moreLi} key={i}>
			          	<div className={style.moreItem}>
				          	<i className='iconfont'>&#xe602;</i>
			          		{
			          			this.props.params.name == 'report'?
			          			<a className={style.moreLink} href={item.url} target='_blank'>{item.title}</a>:
			          			<Link className={style.moreLink} to={`/info/${item.id}`}>{item.title}</Link>
			          		}
		          		</div>
			          	<span>{item.add_date}</span>
			          </li>
			        )}
	      		</ul>
		    </div>
		    <div className={style.paging} id="pages">
		    	<Pagination current={nowPage * 1} total={totalPage * 10} onChange={this.onPageChange} />
		    </div>
      	</div>
      	<Footer />
      </div>
    )
  }
  componentDidMount() {
  	window.scrollTo(0,0)
  }
  onPageChange(page){
  	const { name } = this.props.params
    browserHistory.push(`/hotyq/src/index.html/more/${name}/${page}`)
    this.props.dispatch(selectMoreList(name,page))
  }
}

MoreList.propTypes = {
  list: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownProps) {
	console.log(state)
	const { selectMoreList } = state
	console.log(selectMoreList)
	const defaultMoreList = {
		list:[{
			add_date:'',
			id:0,
			title:'',
			url:''
		}],
		nowPage:1,
		totalCount:1,
		totalPage:1
	}
	const { list , nowPage , totalCount , totalPage } = selectMoreList.list ? selectMoreList : defaultMoreList
  	return {
  		list,
  		nowPage,
  		totalCount,
  		totalPage
  	}
}

module.exports = connect(mapStateToProps)(MoreList)