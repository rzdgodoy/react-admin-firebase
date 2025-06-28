import * as ra from '../../misc/react-admin-models';
import { FireClient } from '../database/FireClient';
export declare function Create<T extends ra.RaRecord>(resourceName: string, params: ra.CreateParams, client: FireClient): Promise<ra.CreateResult<T>>;
