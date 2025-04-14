export function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

export function getRandomArrItem<T>(arr: T[]) {
    return arr[getRandomArbitrary(0, arr.length - 1)]
}

export function toUpperCaseNthChar(s: string, idx: number) {
    const char = s.charAt(idx)

    return s.replace(char, char.toUpperCase())
}
