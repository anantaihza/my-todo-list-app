function errorHandler(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message || 'Internal server error';

  switch (err.name) {
    case 'Unauthenticated':
    case 'JsonWebTokenError':
      status = 401;
      message = 'Unauthenticated';
      break;

    case 'Forbidden':
      status = 403;
      message = 'Forbidden';
      break;

    case 'NotFound':
      status = 404;
      message = 'Data Not Found';
      break;

    case 'SequelizeValidationError':
    case 'SequelizeUniqueConstraintError':
      status = 400;
      message = err.errors[0].message;
      break;

    case 'BadRequest':
      status = 400;
      message = err.message;
      break;

    case 'CredentialsRequired':
      status = 400;
      message = 'Email or Password is Required';
      break;

    case 'Unauthorized':
      status = 401;
      message = 'Email or Password is invalid';
  }

  res.status(status).json({ message: message });
}

module.exports = errorHandler;
