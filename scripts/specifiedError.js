var SpecifiedError = function SpecifiedError(message) {
  this.name = 'SpecifiedError';
  this.message = message || '';
  this.stack = (new Error()).stack;
};

SpecifiedError.prototype = new Error();
SpecifiedError.prototype.constructor = SpecifiedError;

module.exports = SpecifiedError;
