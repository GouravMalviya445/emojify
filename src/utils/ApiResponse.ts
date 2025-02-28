import { NextResponse } from "next/server";

interface IApiResponse {
  statusCode: number;
  message: string;
  success?: boolean;
  data?: object | null;
  error?: object | null;
}

export function ApiResponse(
  statusCode: number,
  message: string,
  data?: object | null,
  error?: object | null,
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