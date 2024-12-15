import { NextResponse } from 'next/server';

export const createCustomError = (message, statusCode, data) => {
  const error = new Error(message);
  error.response = {
    status: statusCode,
    ...(data && { data }),
  };

  return error;
};

export const handleErrorResponse = (error, defaultMessage) =>  {
  const message = error.message || defaultMessage;
  const status = error.response?.status || 500;

  console.error(message, error);
  return NextResponse.json({ error: message }, { status });
};
