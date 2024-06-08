export function generateUUID(): string {
    if (typeof window !== 'undefined' && window.crypto){
        return crypto.randomUUID();
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const cryptoNode = require('crypto');
        return cryptoNode.webcrypto.randomUUID();
    }
}