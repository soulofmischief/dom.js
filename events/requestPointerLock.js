
export function requestPointerLock( dom, cb, selector = 'canvas' ) {
  dom
    .querySelector( selector )
    .addEventListener( 'click', e => {
      e.target.requestPointerLock()
      cb()
    })

  return true
}
