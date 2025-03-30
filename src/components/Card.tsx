type Props = {
    title: string
    text: string
    comment: string
    date: string
}

export function Card({ title, text, comment, date }: Props) {
    return (
        <article className="bg-gray-200 p-2 gap-2 rounded-md flex flex-col">
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm w-full h-auto bg-gray-100 rounded-md p-2">
                {text}
            </p>
            <p className="text-sm w-full bg-gray-100 rounded-md p-2">
                {comment}
            </p>
            <p className="text-xs text-gray-500 mt-1">{date}</p>
        </article>
    )
}
