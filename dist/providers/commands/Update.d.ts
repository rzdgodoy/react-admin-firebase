import * as ra from '../../misc/react-admin-models';
import { FireClient } from '../database';
export declare function Update<T extends ra.RaRecord>(resourceName: string, params: ra.UpdateParams, client: FireClient): Promise<ra.UpdateResult<T>>;
