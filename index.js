var ValidationError = require('error/validation');
var Joi = require('joi');
var JOI_EXPORTS = [
  'any',
  'alternatives',
  'array',
  'bool',
  'boolean',
  'binary',
  'date',
  'func',
  'number',
  'object',
  'string',
  'ref'
];

/**
  # vax

  A simple "vaccination" passthrough that ensures that an incoming request
  passes certain [`joi`](https://github.com/hapijs/joi) schema rules.

  ## Example Usage

  To be completed.

**/
var vax = module.exports = function(opts) {
  var next = (opts || {}).next || function() {};

  // get the relavant schemas
  var query = (opts || {}).query;
  var params = (opts || {}).params;

  function handleRequest(req, res, opts, cb) {
//     Joi.validate(opts.params, schema, function(err, data) {
//       if (err) {
//         return cb(ValidationError(err.details));
//       }

//       console.log('need to generate credentials');
//     });

    return next(req, res, opts, cb);
  }

  return handleRequest;
};

// passthrough the various Joi functions
JOI_EXPORTS.forEach(function(key) {
  vax[key] = Joi[key];
});
