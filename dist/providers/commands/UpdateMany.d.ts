import * as ra from '../../misc/react-admin-models';
import { FireClient } from '../database';
export declare function UpdateMany(resourceName: string, params: ra.UpdateManyParams, client: FireClient): Promise<ra.UpdateManyResult>;
