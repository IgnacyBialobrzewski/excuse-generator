import { Button } from "@mantine/core"
import { useState } from "react"
import { ModalForm } from "./components/ModalForm"
import "./App.css"

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="mx-auto container p-4 flex flex-col gap-2">
            <ModalForm close={() => setIsModalOpen(false)} isOpen={isModalOpen}/>
            <header>
                <h1 className="text-2xl font-semibold">Excuse Generator</h1>
                <p className="text-gray-400">
                    Generate excuses with ease when you're too lazy to think of
                    something!
                </p>
            </header>
            <main>
                <div className="flex gap-2">
                    <Button onClick={() => setIsModalOpen(true)}>
                        New Excuse
                    </Button>
                    <Button color="red">Clear</Button>
                </div>
            </main>
        </div>
    )
}
