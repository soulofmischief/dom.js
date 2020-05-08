/**
 * Creates a DOM object to be queried in each test and appends
 * it to the global state so that shorthand window methods just work
 * without any modications to the source code.
 */
import { JSDOM } from 'jsdom'
import { pick } from 'lodash'
import { oneLine } from 'common-tags'


export const
  fontSize = '16px'

// Create DOM object and get needed methods.
// We have to specify the methods we want because some properties,
// i.e. localStorage cause errors when copied.
const window = pick(
  new JSDOM( oneLine`
    <!DOCTYPE html>
    <html style="font-size: ${fontSize}"/>
  `).window,

  [
    'document',
    'getComputedStyle'
  ]
)

// Append to global state.
Object.assign( global, window )
