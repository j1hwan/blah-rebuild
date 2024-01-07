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

async function postReply(req: NextApiRequest, res: NextApiResponse) {
  const { uid, reply, messageId } = req.body;
  if (uid === undefined) {
    throw new BadReqError('uid가 누락되었습니다.');
  }
  if (reply === undefined) {
    throw new BadReqError('reply가 누락되었습니다.');
  }
  if (messageId === undefined) {
    throw new BadReqError('messageId가 누락되었습니다.');
  }
  await MessageModel.postReply({ uid, reply, messageId });
  return res.status(201).end();
}

const MessageCtrl = {
  post,
  list,
  postReply,
};

export default MessageCtrl;
