import { JSDOM } from 'jsdom'
import o from 'ospec'
import { getAncestor } from '../index.js'


const
  { document } = new JSDOM().window,
  root = document.createElement( 'div' ),
  child = document.createElement( 'div' ),
  grandchild = document.createElement( 'div' )

root.appendChild( child )
child.appendChild( grandchild )


o.spec( 'getAncestor', () => {
  o( 'gets parent by default', () => {
    o( getAncestor( grandchild )).equals( child )
    o( getAncestor( child )).equals( root )
  })

  o( 'gets nth ancestor', () => {
    o( getAncestor( grandchild, 2 )).equals( root )
  })

  o( 'throws if no ancestor exists', () => {
    o(() => getAncestor( root, 10 )).throws(
      "Cannot read properties of null (reading 'parentNode')"
    )
  })
})
