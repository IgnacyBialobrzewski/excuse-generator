import "./App.css"

export default function App() {
    return (
        <main className="p-10 flex flex-col gap-4 mx-auto container">
            <header>
                <h1 className="font-bold text-2xl">Excuse Generator</h1>
                <p className="text-neutral-400">
                    Easily generate excuses for when you're too lazy to think of
                    something!
                </p>
            </header>
            <hr />
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
                <label className="font-semibold mt-2">Creativity level</label>
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
                <button className="bg-blue-500 text-white rounded-md mt-2 hover:cursor-pointer p-2 font-semibold hover:opacity-70 active:scale-95 transition-all">
                    Generate
                </button>
            </form>
        </main>
    )
}
