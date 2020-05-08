const path = require( 'path' )
const { paths } = require( './paths' )


module.exports.alias = {
  Config: paths.config,
  Flow: path.resolve( paths.root, 'flow' ),
  Output: paths.output,
}
