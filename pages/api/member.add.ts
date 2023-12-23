// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import MemberCtrl from '@/controllers/member.ctrl';
import handleError from '@/controllers/error/handle_error';
import CustomServerError from '@/controllers/error/custom_server_error';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const supportedMethods = ['POST'];
  try {
    if (supportedMethods.indexOf(method!) === -1) {
      // 에러반환
      throw new CustomServerError({ statusCode: 400, message: '지원하지 않는 메소드' });
    }
    await MemberCtrl.add(req, res);
  } catch (err) {
    console.error(err);
    // 에러처리
    handleError(err, res);
  }
}
