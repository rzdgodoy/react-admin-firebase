import { FireApp, FireAuth, FireAuthUserCredentials, FireStorage, FireStoragePutFileResult, FireStore, FireStoreBatch, FireStoreCollectionRef, FireUser } from 'misc/firebase-models';
import { RAFirebaseOptions } from '../../options';
import { IFirebaseWrapper } from './IFirebaseWrapper';
export declare class FirebaseWrapper implements IFirebaseWrapper {
    private readonly _app;
    private readonly _firestore;
    private readonly _storage;
    private readonly _auth;
    options: RAFirebaseOptions;
    constructor(inputOptions: RAFirebaseOptions | undefined, firebaseConfig: {});
    dbGetCollection(absolutePath: string): FireStoreCollectionRef;
    dbCreateBatch(): FireStoreBatch;
    dbMakeNewId(): string;
    OnUserLogout(callBack: (u: FireUser | null) => any): void;
    putFile(storagePath: string, rawFile: any): FireStoragePutFileResult;
    getStorageDownloadUrl(fieldSrc: string): Promise<string>;
    serverTimestamp(): import("@firebase/firestore").FieldValue;
    authSetPersistence(persistenceInput: 'session' | 'local' | 'none'): Promise<void>;
    authSigninEmailPassword(email: string, password: string): Promise<FireAuthUserCredentials>;
    authSignOut(): Promise<void>;
    authGetUserLoggedIn(): Promise<FireUser>;
    GetUserLogin(): Promise<FireUser>;
    /** @deprecated */
    auth(): FireAuth;
    /** @deprecated */
    storage(): FireStorage;
    /** @deprecated */
    GetApp(): FireApp;
    /** @deprecated */
    db(): FireStore;
}
