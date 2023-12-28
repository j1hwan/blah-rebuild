import * as admin from 'firebase-admin';

interface Config {
  credential: {
    privateKey: string;
    clientEmail: string;
    projectId: string;
  };
}

export default class FirebaseAdmin {
  public static instance: FirebaseAdmin;

  private init = false;

  public static getInstance(): FirebaseAdmin {
    if (FirebaseAdmin.instance === undefined || FirebaseAdmin.instance === null) {
      FirebaseAdmin.instance = new FirebaseAdmin();
      FirebaseAdmin.instance.bootstrap();
    }
    return FirebaseAdmin.instance;
  }

  private bootstrap(): void {
    if (!!admin.apps.length === true) {
      this.init = true;
      return;
    }

    const config: Config = {
      credential: {
        privateKey: (process.env.privateKey || '').replace(/\\n/g, '\n'),
        projectId: process.env.projectId || '',
        clientEmail: process.env.clientEmail || '',
      },
    };
    admin.initializeApp({ credential: admin.credential.cert(config.credential) });
    console.info('Firebase Admin Initialized');
  }

  /**firestore 반환*/
  public get Firestore(): FirebaseFirestore.Firestore {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.firestore();
  }

  public get Auth(): admin.auth.Auth {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.auth();
  }
}
