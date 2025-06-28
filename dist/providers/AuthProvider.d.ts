import { FireUser } from '../misc/firebase-models';
import { AuthProvider as RaAuthProvider } from '../misc/react-admin-models';
import { RAFirebaseOptions } from './options';
export declare function AuthProvider(firebaseConfig: {}, options: RAFirebaseOptions): ReactAdminFirebaseAuthProvider;
export type ReactAdminFirebaseAuthProvider = RaAuthProvider & {
    getAuthUser: () => Promise<FireUser>;
    getJWTAuthTime: () => Promise<string | null>;
    getJWTExpirationTime: () => Promise<string | null>;
    getJWTSignInProvider: () => Promise<string | null>;
    getJWTClaims: () => Promise<{
        [key: string]: any;
    } | null>;
    getJWTToken: () => Promise<string | null>;
};
