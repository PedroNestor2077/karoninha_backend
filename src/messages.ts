export default Object({
  serverError: {
    success: false,
    code: 500,
    message: 'Server Error',
  },
  success: {
    success: true,
    code: 200,
    message: 'Success',
  },
  noDataOnRequest: {
    success: false,
    code: 400,
    message: 'Please expecify a JSON body for the POST request.',
  },
  invalidPayload: {
    success: false,
    code: 400,
    message: 'Invalid payload.',
  },
  externalServiceError: {
    success: false,
    code: 424,
    message: 'External service error.',
  },
  externalDatabaseError: {
    success: false,
    code: 424,
    message: 'External DataBase error.',
  },
  noUserID: {
    success: false,
    code: 424,
    message: 'No userID found.',
  },
});
