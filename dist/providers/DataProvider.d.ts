import { FireApp } from '../misc/firebase-models';
import * as ra from '../misc/react-admin-models';
import { RAFirebaseOptions } from './options';
export interface IDataProvider extends ra.DataProvider {
    app: FireApp;
}
export declare function DataProvider(firebaseConfig: {}, optionsInput?: RAFirebaseOptions): IDataProvider;
