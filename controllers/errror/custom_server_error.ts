export default class CustomServerError extends Error {
  public statusCode: number;

  // 300번대 에러 redirect할때 사용
  public location?: string;

  constructor({ statusCode = 500, message, location }: { statusCode?: number; message: string; location?: string }) {
    super(message);
    this.statusCode = statusCode;
    this.location = location;
  }

  serializeError(): { message: string | string } {
    return { message: this.message };
  }
}
