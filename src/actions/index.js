import fetch from 'isomorphic-fetch'

export const SELECT_HOME_LIST = 'SELECT_HOME_LIST'
export const SELECT_INFO_DETAIL = 'SELECT_INFO_DETAIL'
export const SELECT_MORE_LIST = 'SELECT_MORE_LIST'

function homeListPosts(json) {
  return {
    type: SELECT_HOME_LIST,
		homeList: json
  }
}

export function selectHomeList() {
	console.log('selectHomeList-action')
  return dispatch => {
		return fetch(`${api}/list.do`).then(response => response.json())
      	.then(json => dispatch(homeListPosts(json)))
  }
}

function moreListPosts(name,json) {
	console.log(json)
  return {
    type: SELECT_MORE_LIST,
		moreList: json,
		name
  }
}

export function selectMoreList(name,page) {
  return dispatch => {
		return fetch(`${api}/${name}.do?currentPage=${page}`).then(response => response.json())
      	.then(json => dispatch(moreListPosts(name,json)))
  }
}

function infoDetailPosts(json) {
  return {
    type: SELECT_INFO_DETAIL,
		infoDetail: json
  }
}

export function selectInfoDetail(id) {
  return dispatch => {
		return fetch(`${api}/infoDetail/${id}`).then(response => response.json())
      	.then(json => dispatch(infoDetailPosts(json)))
  }
}