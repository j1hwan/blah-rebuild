import { firestore } from 'firebase-admin';

interface MesssageBase {
  id: string;
  message: string;
  reply?: string;
  author?: {
    displayName: string;
    photoURL?: string;
  };
}

export interface InMessage extends MesssageBase {
  createAt: string;
  replyAt?: string;
}

export interface InMessageServer extends MesssageBase {
  createAt: firestore.Timestamp;
  replyAt?: firestore.Timestamp;
}
