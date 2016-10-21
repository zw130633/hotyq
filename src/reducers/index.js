import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { SELECT_HOME_LIST , SELECT_MORE_LIST , SELECT_INFO_DETAIL  } from '../actions'

export function selectHomeList(state = { }, action) {
	console.log('homelist')
	console.log(action.type)
	switch (action.type) {
    case SELECT_HOME_LIST:
      return Object.assign({}, state, {
      	infoList:action.homeList.infoList,
      	reportList:action.homeList.reportList
      })
    default:
      return state
	}
}

export function selectMoreList(state = { }, action) {
	console.log('morelist')
	console.log(action)
	switch (action.type) {
    case SELECT_MORE_LIST:
      return Object.assign({}, state, {
      	list:action.moreList[action.name+'List'],
      	totalPage:action.moreList.totalPage,
      	totalCount:action.moreList.totalCount,
      	nowPage:action.moreList.nowPage
      })
    default:
      return state
	}
}

export function selectInfoDetail(state = { }, action) {
	console.log('infodetail')
	console.log(action.type)
	switch (action.type) {
    case SELECT_INFO_DETAIL:
      return Object.assign({}, state, {
      	infoDetail:action.infoDetail
      })
    default:
      return state
	}
}

const rootReducer = combineReducers({
	selectHomeList,
	selectMoreList,
	selectInfoDetail,
  routing
})

export default rootReducer
