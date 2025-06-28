import * as ra from '../../misc/react-admin-models';
import { FireClient } from '../database/FireClient';
export declare function GetMany<T extends ra.RaRecord>(resourceName: string, params: ra.GetManyParams, client: FireClient): Promise<ra.GetManyResult<T>>;
