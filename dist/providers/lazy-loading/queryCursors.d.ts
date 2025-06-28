import { QueryConstraint } from 'firebase/firestore';
import { FireStoreCollectionRef, FireStoreDocumentSnapshot } from 'misc/firebase-models';
import { IFirestoreLogger, messageTypes } from '../../misc';
export declare function setQueryCursor(document: FireStoreDocumentSnapshot, params: messageTypes.IParamsGetList, resourceName: string): void;
export declare function getQueryCursor(collection: FireStoreCollectionRef, params: messageTypes.IParamsGetList, resourceName: string, flogger: IFirestoreLogger): Promise<FireStoreDocumentSnapshot | false>;
export declare function clearQueryCursors(resourceName: string): void;
export declare function findLastQueryCursor(collection: FireStoreCollectionRef, queryConstraints: QueryConstraint[], params: messageTypes.IParamsGetList, resourceName: string, flogger: IFirestoreLogger): Promise<import("@firebase/firestore").QueryDocumentSnapshot<import("@firebase/firestore").DocumentData, import("@firebase/firestore").DocumentData>>;
