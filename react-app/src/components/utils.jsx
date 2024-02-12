
export function uniqueId() {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substring(10);
    return 'wcf-'+dateString + randomness;
}



