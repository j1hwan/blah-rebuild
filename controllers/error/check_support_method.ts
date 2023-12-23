import BadReqError from './bad_request_error';

export default function checkSupportMethod(supportedMethods: string[], method?: string) {
  if (supportedMethods.indexOf(method!) === -1) {
    // 에러반환
    throw new BadReqError('지원하지 않는 메소드');
  }
}
