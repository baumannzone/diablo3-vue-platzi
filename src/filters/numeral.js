import numeral from 'numeral'

/**
 * Returns 0 if no param. Returns `num` formatted
 * @param {Number} num
 */
const formatNumber = (num) => {
  if (!num) {
    return 0
  }
  return numeral(Number(num)).format()
}

export {
  formatNumber
}
