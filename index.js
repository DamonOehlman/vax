/**
  # vax

  A simple "vaccination" passthrough that ensures that an incoming request
  passes certain [`joi`](https://github.com/hapijs/joi) schema rules.

  ## Example Usage

  To be completed.

**/
module.exports = function(opts) {
  var next = (opts || {}).next || function() {};

  // get the relavant schemas
  var query = (opts || {}).query;
  var params = (opts || {}).params;

  function handleRequest(req, res, opts, cb) {
    return next(req, res, opts, cb);
  }

  return handleRequest;
};
