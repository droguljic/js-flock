/**
 * Casts `value` as an array if it's plain object. If it's array return unmodified array
 * In any other case return empty array
 *
 * @since 0.10.0
 */
module.exports = function(val) {
  if (Array.isArray(val)) {
    return val;
  }
  return (val && typeof val === 'object' && !(val instanceof Set) && !(val instanceof Map))
    ? [val] : [];
};
