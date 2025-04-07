import { Badge, Button, Table } from "@mantine/core"
import { Excuse } from "../lib/Excuse"

export function ExcuseTable({ excuses }: { excuses: Excuse[] }) {
    return (
        <Table>
            <Table.Thead>
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
                            <Button>Show</Button>
                        </Table.Td>
                        <Table.Td>
                            <Button>Show</Button>
                        </Table.Td>
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    )
}
