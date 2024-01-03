import { firestore } from 'firebase-admin';

interface messsageBase {
  id: string;
  message: string;
  reply?: string;
  author?: {
    displayName: string;
    photoURL?: string;
  };
}

export interface InMessage extends messsageBase {
  createAt: string;
  replyAt?: string;
}

export interface InMessageServer extends messsageBase {
  createAt: firestore.Timestamp;
  replyAt?: firestore.Timestamp;
}
