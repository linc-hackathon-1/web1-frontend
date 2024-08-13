import { StatusCodes } from 'http-status-codes';

export const STATUS_NOT_DEFINED = 0;

export const fetchErrorMessages: { [key: number]: string } = {
  [StatusCodes.INTERNAL_SERVER_ERROR]: '서버 에러가 발생했습니다.',
  [StatusCodes.BAD_REQUEST]: '잘못된 요청입니다.',
  [StatusCodes.NOT_FOUND]: '요청한 데이터가 존재하지 않습니다.',
  [STATUS_NOT_DEFINED]: '알 수 없는 에러가 발생했습니다.',
};
