export function sum(a: number, b: number) {
    return a + b;
}

export function mul(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(str: string) {
    const words = str.toLowerCase().split(' ');
    return words.filter((w) => {
        return w !== '' && w !== '-';
    }).map((w) => {
        return w.replace(/!/g, '').replace(/\./g, '').replace(',', '');
    });
}