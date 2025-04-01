import { Button, Checkbox, Input, Modal, Select, Slider, Textarea, TextInput,  } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export function ModalForm({ isOpen, close }: { isOpen: boolean, close: () => any}) {
    return (
            <Modal
                opened={isOpen}
                onClose={close}
                title={<h2 className="font-bold">New Excuse</h2>}
                centered
                onSubmit={alert}
            >
                <div className="flex flex-col gap-2">
                    <TextInput
                        required
                        label="Name"
                        description="The name of the person this excuse is meant for."
                        placeholder="Teacher, Boss, etc."
                    />
                    <DateInput required label="Date" placeholder="Date of the day you're making an excuse for."/>
                    <Select
                        required
                        label="Reason"
                        data={[
                            "Being late",
                            "Homework past due",
                            "Lack of activity",
                        ]}
                    />
                    <Input.Wrapper
                        label="Complexity Level"
                        description="Decides how believable the excuse will be."
                    >
                        <Slider className="mt-1" />
                    </Input.Wrapper>
                    <Input.Wrapper
                        label="Creativity level"
                        description="Decides how 'out there' the excuse will be."
                    >
                        <Slider className="mt-1" />
                    </Input.Wrapper>
                    <Checkbox label="Urgent" description="Record will be marked as urgent."/>
                    <Textarea label="Comment" description="Optional comment, only visible to you."/>
                    <Button>Generate</Button>
                </div>
            </Modal>
    )
}