/**
 * Casts `value` as an array if it's not one.
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
