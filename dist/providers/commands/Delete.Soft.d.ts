import * as ra from '../../misc/react-admin-models';
import { FireClient } from '../database';
export declare function DeleteSoft<T extends ra.RaRecord>(resourceName: string, params: ra.DeleteParams, client: FireClient): Promise<ra.DeleteResult<T>>;
