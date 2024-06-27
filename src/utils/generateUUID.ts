export function generateUUID(): string {
    if (typeof window !== 'undefined' && window.crypto && typeof window.crypto.randomUUID === 'function') {
        return window.crypto.randomUUID();
    } else if (typeof require !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { randomUUID, randomBytes } = require('crypto');

        if (typeof randomUUID === 'function') {
            return randomUUID();
        } else {
            // Fallback for environments where randomUUID is not available
            // @ts-ignore
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ randomBytes(1)[0] & 15 >> c / 4).toString(16)
            );
        }
    } else {
        // Additional fallback for browsers that don't support crypto.randomUUID
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}