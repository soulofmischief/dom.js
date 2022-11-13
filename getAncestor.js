

/**
 * Recursively get a parent's nth ancestor.
 */
export function getAncestor( element, n = 1 ) {
  return n > 1
    ? getAncestor( element.parentNode, n - 1 )
    : element.parentNode
}
