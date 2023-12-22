import { NextApiRequest, NextApiResponse } from 'next';
import MemberModel from '@/models/member/member.model';

async function add(req: NextApiRequest, res: NextApiResponse) {
  // InAuthUser 참고
  const { uid, email, displayName, photoURL } = req.body;
  if (uid === undefined || uid === null) {
    return res.status(400).json({ result: false, message: 'uid is required' });
  }
  if (email === undefined || email === null) {
    return res.status(400).json({ result: false, message: 'email is required' });
  }
  const addResult = await MemberModel.add({ uid, email, displayName, photoURL });
  if (addResult.result === true) {
    return res.status(200).json(addResult);
  }
  return res.status(500).json(addResult);
}

const MemberCtrl = {
  add,
};

export default MemberCtrl;
