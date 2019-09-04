module.exports = {
  invokedByFunctionAction,
  invokedBeforeRequest,
  invokedAfterResponse,
}

// Function invoked by "function" action
function invokedByFunctionAction(context, ee, next) {
  return next(); // MUST be called for the scenario to continue
}

function invokedBeforeRequest(requestParams, context, ee, next) {
  console.log(requestParams);
  return next(); // MUST be called for the scenario to continue
}

function invokedAfterResponse(requestParams, response, context, ee, next) {
  console.log(response.headers);
  return next(); // MUST be called for the scenario to continue
}
