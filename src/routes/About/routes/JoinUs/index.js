module.exports = {
  path: 'JoinUs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/JoinUs'))
    })
  }
}
