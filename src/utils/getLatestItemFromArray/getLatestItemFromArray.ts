export const getLatestItemFromArray = <T>(arr: T[]): T | undefined => arr.slice(-1).pop();
