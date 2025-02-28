import { NextResponse } from "next/server";

interface IApiResponse {
  statusCode: number;
  message: string;
  success?: boolean;
  data?: any;
  error?: any;
}

export function ApiResponse(
  statusCode: number,
  message: string,
  data?: any,
  error?: any,
) {
  const response: IApiResponse = {
    statusCode,
    message,
    data,
    error,
    success: statusCode < 400
  }
  return NextResponse.json(response, {status: statusCode})
}