import { messageTypes } from '../../misc';
import * as ra from '../../misc/react-admin-models';
import { FireClient, ResourceManager } from '../database';
import { RAFirebaseOptions } from '../options';
export declare class FirebaseLazyLoadingClient {
    private readonly options;
    private readonly rm;
    private client;
    constructor(options: RAFirebaseOptions, rm: ResourceManager, client: FireClient);
    apiGetList<T extends ra.RaRecord>(resourceName: string, reactAdminParams: ra.GetListParams): Promise<ra.GetListResult<T>>;
    apiGetManyReference(resourceName: string, reactAdminParams: messageTypes.IParamsGetManyReference): Promise<messageTypes.IResponseGetManyReference>;
    private tryGetResource;
}
