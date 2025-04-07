import { Button } from "@mantine/core"
import { useState } from "react"
import { ModalForm } from "./components/ModalForm"
import { ExcuseTable } from "./components/ExcuseTable"
import { Excuse } from "./lib/Excuse"
import "./App.css"

export default function App() {
    const [excuses, setExcuses] = useState<Excuse[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const addExcuse = (excuse: Excuse) => {
        setExcuses((prev) => [...prev, excuse])
    }

    const clearExcuses = () => setExcuses([])

    return (
        <div className="mx-auto container p-4 flex flex-col gap-2">
            <ModalForm
                close={() => setIsModalOpen(false)}
                onSubmit={addExcuse}
                isOpen={isModalOpen}
            />
            <header className="mt-6">
                <h1 className="text-2xl font-semibold">Excuse Generator</h1>
                <p className="text-gray-400">
                    Generate excuses with ease when you're too lazy to think of
                    something!
                </p>
            </header>
            <main className="flex flex-col gap-6">
                <div className="flex gap-2">
                    <Button onClick={() => setIsModalOpen(true)}>
                        New Excuse
                    </Button>
                    <Button onClick={clearExcuses} color="red">
                        Clear
                    </Button>
                </div>
                <ExcuseTable
                    excuses={[
                        {
                            Name: "Mark",
                            Reason: "Late for work",
                            ComplexityLevel: 5,
                            Date: new Date().toLocaleDateString(),
                            CreativityLevel: 4,
                            Urgent: true,
                            Comment: "",
                            Text: "",
                        },
                        ...excuses,
                    ]}
                />
            </main>
        </div>
    )
}
