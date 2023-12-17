import { getApps, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';

// import getConfig from 'next.config';
const { publicRuntimeConfig } = getConfig();

const FirebaseCredentials = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
};

export default class FirebaseClient {
  private static instance: FirebaseClient;

  private auth: Auth;

  public constructor() {
    const apps = getApps();
    if (getApps.length === 0) {
      console.info('Firebase Client init start');
      initializeApp(FirebaseCredentials);
    }
    this.auth = getAuth();
    console.info('Firebase auth');
  }

  public static getInstace(): FirebaseClient {
    if (FirebaseClient.instance === undefined || FirebaseClient.instance === null) {
      FirebaseClient.instance = new FirebaseClient();
    }
    return FirebaseClient.instance;
  }

  public get Auth(): Auth {
    return this.auth;
  }
}
