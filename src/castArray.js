/**
 * Casts `value` as an array if it's not one.
 *
 * @since 0.10.0
 */
module.exports = function(val, options = {}) {
  if (Array.isArray(val)) {
    return val;
  }
  if (options.objectMode) {
    return val && typeof val === 'object' ? [val] : [];
  }
  return (val instanceof Set || val instanceof Map) ? Array.from(val) : [val];
};
