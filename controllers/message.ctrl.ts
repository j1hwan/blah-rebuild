import { NextApiRequest, NextApiResponse } from 'next';
import BadReqError from './error/bad_request_error';
import MessageModel from '@/models/message/message.model';

async function post(req: NextApiRequest, res: NextApiResponse) {
  const { uid, message, author } = req.body;
  if (uid === undefined) {
    throw new BadReqError('uid가 누락되었습니다.');
  }
  if (message === undefined) {
    throw new BadReqError('message가 누락되었습니다.');
  }
  await MessageModel.post({ uid, message, author });
  return res.status(200).end();
}

async function list(req: NextApiRequest, res: NextApiResponse) {
  const { uid } = req.query;
  if (uid === undefined) {
    throw new BadReqError('uid가 누락되었습니다.');
  }
  const uidToString = Array.isArray(uid) ? uid[0] : uid;
  const listResp = await MessageModel.list({ uid: uidToString });
  return res.status(200).json(listResp);
}

const MessageCtrl = {
  post,
  list,
};

export default MessageCtrl;
