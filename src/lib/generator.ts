import { Excuse } from "./Excuse";
import { keywords } from "./keywords";

function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomArrItem<T>(arr: T[]) {
    return arr[getRandomArbitrary(0, arr.length-1)]
}

console.log(getRandomArbitrary(1, 10))

export function generateExcuse(excuse: Excuse) {
    let sentence: string[] = []

    sentence.push(getRandomArrItem(keywords.greetings))
    sentence.push(excuse.Name)
    sentence.push(getRandomArrItem(keywords.apologies))
    sentence.push(excuse.Reason)
    sentence.push(".")
    sentence.push(getRandomArrItem(keywords.nouns))

    const verb = getRandomArrItem(keywords.verbs)
    sentence.push(verb.text)
    sentence.push(getRandomArrItem(verb.noun))

    const reason = getRandomArrItem(keywords.reasons)
    sentence.push(reason.text)
    sentence.push(getRandomArrItem(reason.verb))

    return sentence.join(" ")
}