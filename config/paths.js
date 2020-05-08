const path = require( 'path' )


module.exports.paths = {
  config: path.resolve( __dirname, '.' ),
  output: path.resolve( __dirname, '../lib' ),
  root: path.resolve( __dirname, '../' ),
}
