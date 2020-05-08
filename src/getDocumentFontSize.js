// @flow strict


export function getDocumentFontSize(): string {
  return parseFloat( getComputedStyle( document.documentElement ).fontSize )
}
