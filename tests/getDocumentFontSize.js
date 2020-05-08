import o from 'ospec'
import { fontSize } from './_global'
import { getDocumentFontSize } from '../src'


o.spec( 'getDocumentFontSize', () => {
  o( 'works', () => {
    o( getDocumentFontSize()).deepEquals( parseFloat( fontSize ))
  })
})
