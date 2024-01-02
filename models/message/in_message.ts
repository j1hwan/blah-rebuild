export interface InMessage {
  id: string;
  message: string;
  reply?: string;
  createAt: string;
  replayAt?: string;
  author?: {
    displayName: string;
    photoURL?: string;
  };
}
