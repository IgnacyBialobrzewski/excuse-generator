import "./App.css"
import { Card } from "./components/Card"

export default function App() {
    return (
        <main className="p-10 flex flex-col mx-auto container gap-4">
            <header>
                <h1 className="font-bold text-2xl text-blue-500">
                    Excuse Generator
                </h1>
                <p className="text-gray-500">
                    Easily generate excuses for when you're too lazy to think of
                    something!
                </p>
            </header>
            <div className="flex flex-col gap-4">
                <form className="flex flex-col gap-2">
                    <label className="font-semibold">Name</label>
                    <input
                        className="bg-gray-200 p-2 rounded-md"
                        type="text"
                        placeholder="Eg. Mark"
                        required
                    />
                    <label className="font-semibold mt-2">Excuse type</label>
                    <select
                        className="bg-gray-200 p-2 hover:cursor-pointer rounded-md"
                        required
                    >
                        <option>Being Late</option>
                        <option>Homework past due</option>
                        <option>Lack of activity</option>
                    </select>
                    <label className="font-semibold mt-2">Date</label>
                    <input
                        className="bg-gray-200 hover:cursor-pointer p-2 rounded-md"
                        type="date"
                        required
                    />
                    <label className="font-semibold mt-2">
                        Creativity level
                    </label>
                    <select
                        className="bg-gray-200 hover:cursor-pointer p-2 rounded-md"
                        required
                    >
                        <option>Generic</option>
                        <option>Average</option>
                        <option>Sophisticated</option>
                    </select>
                    <label className="font-semibold mt-2">Comment</label>
                    <textarea
                        className="bg-gray-200 p-2 rounded-md"
                        placeholder="Brief comment (Only visible to you)"
                    ></textarea>
                    <label className="font-semibold mt-2">Urgent</label>
                    <input
                        className="text-left self-start flex hover:cursor-pointer"
                        type="checkbox"
                    />
                    <button className="bg-blue-500 text-white rounded-md mt-2 hover:cursor-pointer p-2 font-semibold hover:bg-white hover:text-blue-500 hover:outline-2 hover:outline-blue-500 transition-all">
                        Generate
                    </button>
                </form>
                <section className="flex flex-col gap-2">
                    <h2 className="font-bold text-xl">Your excuses</h2>
                    <div>
                        <Card
                            title="Being Late - Mark"
                            text="Hey Mark. I'm sorry for being late yesterday but I strained my leg and couldn't make it, see kthxbye."
                            comment="In reality, that was a lie, I was just lazy."
                            date={new Date().toLocaleDateString()}
                        />
                    </div>
                </section>
            </div>
        </main>
    )
}
