import { QueryConstraint } from 'firebase/firestore';
import { FireStoreCollectionRef, FireStoreQuery } from 'misc/firebase-models';
import { IFirestoreLogger, messageTypes } from '../../misc';
interface ParamsToQueryOptions {
    filters?: boolean;
    sort?: boolean;
    pagination?: boolean;
}
interface QueryPair {
    noPagination: FireStoreQuery;
    withPagination: FireStoreQuery;
}
export declare function paramsToQuery<TParams extends messageTypes.IParamsGetList>(collection: FireStoreCollectionRef, params: TParams, resourceName: string, flogger: IFirestoreLogger, options?: ParamsToQueryOptions): Promise<QueryPair>;
export declare function getFiltersConstraints(filters: {
    [fieldName: string]: any;
}): QueryConstraint[];
export declare function getSortConstraints(sort: {
    field: string;
    order: "ASC" | "DESC";
} | undefined): QueryConstraint[];
export declare function getFullParamsForQuery<TParams extends messageTypes.IParamsGetList>(reactAdminParams: TParams, softdeleteEnabled: boolean): TParams;
export declare function getNextPageParams<TParams extends messageTypes.IParamsGetList>(params: TParams): TParams;
export {};
