// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import MemberModel from '@/models/member/member.model';
import MemberCtrl from '@/controllers/member.ctrl';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const supportedMethods = ['POST'];
  try {
    if (supportedMethods.indexOf(method!) === -1) {
      // 에러반환
    }
    await MemberCtrl.add(req, res);
  } catch (err) {
    console.error(err);
    // 에러처리
  }
}
