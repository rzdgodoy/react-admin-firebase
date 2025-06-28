import { FireStoreDocumentSnapshot, FireStoreQueryDocumentSnapshot } from './firebase-models';
import * as ra from './react-admin-models';
export declare function parseFireStoreDocument<T extends ra.RaRecord>(doc: FireStoreQueryDocumentSnapshot | FireStoreDocumentSnapshot | undefined): T;
