import * as ra from '../../misc/react-admin-models';
import { FireClient } from '../database/FireClient';
export declare function GetManyReference<T extends ra.RaRecord>(resourceName: string, params: ra.GetManyReferenceParams, client: FireClient): Promise<ra.GetManyReferenceResult<T>>;
