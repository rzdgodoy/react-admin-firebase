import { FireStoreCollectionRef, FireStoreQuery } from './firebase-models';
import { ParsedRefDoc } from './internal.models';
import { GetListParams } from './react-admin-models';
export declare namespace messageTypes {
    type IParamsGetList = GetListParams;
    type CollectionQueryType = (arg0: FireStoreCollectionRef) => FireStoreQuery;
    interface IParamsGetOne {
        id: string;
    }
    interface IParamsCreate {
        data: {
            id?: string;
            [key: string]: any;
        };
    }
    interface IParamsUpdate {
        id: string;
        data: {
            id: string;
        };
        previousData: {};
    }
    interface IParamsUpdateMany {
        ids: string[];
        data: {
            id: string;
        };
    }
    interface IParamsDelete {
        id: string;
        previousData: {};
    }
    interface IParamsDeleteMany {
        ids: string[];
    }
    type IdMaybeRef = string | any;
    interface IParamsGetMany {
        ids: (string | ParsedRefDoc)[];
    }
    interface IParamsGetManyReference {
        target: string;
        id: string;
        pagination: {
            page: number;
            perPage: number;
        };
        sort: {
            field: string;
            order: "ASC" | "DESC";
        };
        filter?: {
            collectionQuery?: CollectionQueryType;
            [fieldName: string]: any;
        };
    }
    interface IResponseGetList {
        data: Array<{}>;
        total: number;
    }
    interface IResponseGetOne {
        data: {};
    }
    interface IResponseCreate {
        data: {};
    }
    interface IResponseUpdate {
        data: {
            id: string;
        };
    }
    interface IResponseUpdateMany {
        data: Array<{}>;
    }
    interface IResponseDelete {
        data: {};
    }
    interface IResponseDeleteMany {
        data: Array<{}>;
    }
    interface IResponseGetMany {
        data: Array<{}>;
    }
    interface IResponseGetManyReference {
        data: Array<{}>;
        total: number;
    }
    interface HttpErrorType {
        status: number;
        message: string;
        json?: any;
    }
    type IResponseAny = IResponseGetList | IResponseGetOne | IResponseCreate | IResponseUpdate | IResponseUpdateMany | IResponseDelete | IResponseDeleteMany | HttpErrorType;
}
