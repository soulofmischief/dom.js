const { alias } = require( './config/alias' )


module.exports = function ( api ) {
  // Cache the returned value forever and don't call this function again.
  api.cache( true )

  const
    env = {
      development: {},
      production: {},
    },

    presets = [
      '@babel/env',
      '@babel/flow',
    ],

    plugins = [
      'lodash',
      [ 'module-resolver', { alias }],
    ]

  return {
    env,
    presets,
    plugins,
  }
}
