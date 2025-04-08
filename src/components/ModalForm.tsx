import {
    Button,
    Checkbox,
    Input,
    Modal,
    Select,
    Slider,
    Textarea,
    TextInput,
} from "@mantine/core"
import { DateInput } from "@mantine/dates"
import { Excuse } from "../lib/Excuse"
import { useState } from "react"
import { generateExcuse } from "../lib/generator"

type Props = {
    isOpen: boolean
    close: () => any
    onSubmit: (data: Excuse) => any
}

export function ModalForm({ isOpen, close, onSubmit }: Props) {
    const [formData, setFormData] = useState<Excuse>({
        Name: "",
        Reason: "",
        ComplexityLevel: 0,
        CreativityLevel: 0,
        Urgent: false,
        Date: "",
        Comment: "",
        Text: ""
    })

    return (
        <Modal
            opened={isOpen}
            onClose={close}
            centered
            onSubmit={alert}
        >
            <div className="flex flex-col gap-2">
                <TextInput
                    required
                    label="Name"
                    description="The name of the person this excuse is meant for."
                    placeholder="Teacher, Boss, etc."
                    onChange={(v) => setFormData({
                        ...formData,
                        Name: v.target.value
                    })}

                />
                <DateInput
                    required
                    label="Date"
                    placeholder="Date of the day you're making an excuse for."
                    onChange={(v) => setFormData({
                        ...formData,
                        Date: v?.toLocaleDateString() ?? "Invalid"
                    })}
                />
                <Select
                    required
                    label="Reason"
                    data={[
                        "Being late",
                        "Homework past due",
                        "Lack of activity",
                    ]}
                    onChange={(v) => setFormData({
                        ...formData,
                        Reason: v ?? ""
                    })}
                />
                <Input.Wrapper
                    label="Complexity Level"
                    description="Decides how believable the excuse will be."
                >
                    <Slider className="mt-1" onChange={(v) => setFormData({
                        ...formData,
                        ComplexityLevel: v
                    })} />
                </Input.Wrapper>
                <Input.Wrapper
                    label="Creativity level"
                    description="Decides how 'out there' the excuse will be."
                >
                    <Slider className="mt-1" onChange={(v) => setFormData({
                        ...formData,
                        CreativityLevel: v
                    })}/>
                </Input.Wrapper>
                <Checkbox
                    label="Urgent"
                    description="Record will be marked as urgent."
                    onChange={(v) => setFormData({
                        ...formData,
                        Urgent: v.target.checked
                    })}
                />
                <Textarea
                    label="Comment"
                    description="Optional comment, only visible to you."
                    onChange={(v) => setFormData({
                        ...formData,
                        Comment: v.target.value
                    })}
                />
                <Button onClick={() => {
                    close()
                    onSubmit({
                        ...formData,
                        Text: generateExcuse(formData)
                    })
                }}>Generate</Button>
            </div>
        </Modal>
    )
}
