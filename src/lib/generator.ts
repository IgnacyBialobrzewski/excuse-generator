import { Excuse } from "./Excuse"
import { keywords } from "./keywords"
import { getRandomArrItem, toUpperCaseNthChar } from "./util"

export function generateExcuse(excuse: Excuse) {
    let sentence: string[] = []

    sentence.push(toUpperCaseNthChar(getRandomArrItem(keywords.greetings), 0))
    sentence.push(excuse.Name)
    sentence.push(getRandomArrItem(keywords.apologies))
    sentence.push(excuse.Reason)
    sentence.push(".")
    sentence.push(toUpperCaseNthChar(getRandomArrItem(keywords.nouns), 0))

    const verb = getRandomArrItem(keywords.verbs)
    sentence.push(verb.text)
    sentence.push(getRandomArrItem(verb.noun))

    const reason = getRandomArrItem(keywords.reasons)
    sentence.push(reason.text)
    sentence.push(getRandomArrItem(reason.verb))

    return sentence.join(" ")
}
