export function stringComparison(a: string, b: string) {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();

    if (lowerA === lowerB) {
        return 0;
    }

    return lowerA < lowerB ? -1 : 1;
}

