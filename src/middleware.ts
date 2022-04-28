import express from 'express';
import messages from './messages';
export default async function Middleware(
  request: express.Request,
  response: express.Response,
  controller: CallableFunction
) {
  try {
    // Result must be DTO
    const result: Object = await controller(request);
    response
      .status(messages['success'].code)
      .send({ info: messages['success'], result: result });
  } catch (error: any) {
    console.log(error);
    // Expected expections must be listed on messages
    if (messages[error.message]) {
      response
        .status(messages[error.message].code)
        .send({ info: messages[error.message], result: {} });
    } else {
      response
        .status(messages['serverError'].code)
        .send({ info: messages['serverError'], result: {} });
    }
  }
}
