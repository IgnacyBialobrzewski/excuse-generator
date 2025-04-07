import { Badge, Button, Modal, Table, Textarea } from "@mantine/core"
import { Excuse } from "../lib/Excuse"
import { useState } from "react"

export function ExcuseTable({ excuses }: { excuses: Excuse[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalText, setModalText] = useState("")

    const openModalWithText = (text: string) => {
        setIsModalOpen(true)
        setModalText(text)
    }

    return (
        <Table>
            <Table.Thead>
                <Modal
                    opened={isModalOpen}
                    title={<h2 className="font-semibold">Content</h2>}
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-400 text-sm">
                            Use this to copy and paste the text
                        </p>
                        <Textarea>{modalText}</Textarea>
                    </div>
                </Modal>
                <Table.Tr>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Reason</Table.Th>
                    <Table.Th>Complexity Level</Table.Th>
                    <Table.Th>Creativity Level</Table.Th>
                    <Table.Th>Urgent</Table.Th>
                    <Table.Th>Comment</Table.Th>
                    <Table.Th>Excuse</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {excuses.map((v, i) => (
                    <Table.Tr key={i}>
                        <Table.Td>{v.Name}</Table.Td>
                        <Table.Td>{v.Reason}</Table.Td>
                        <Table.Td>{v.ComplexityLevel}</Table.Td>
                        <Table.Td>{v.CreativityLevel}</Table.Td>
                        <Table.Td>
                            {v.Urgent ? (
                                <Badge color="red">Yes</Badge>
                            ) : (
                                <Badge color="green">No</Badge>
                            )}
                        </Table.Td>
                        <Table.Td>
                            <Button
                                onClick={() => openModalWithText(v.Comment)}
                            >
                                Show
                            </Button>
                        </Table.Td>
                        <Table.Td>
                            <Button onClick={() => openModalWithText(v.Text)}>
                                Show
                            </Button>
                        </Table.Td>
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    )
}
