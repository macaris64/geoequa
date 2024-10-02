export default function TableData({columns, data}: { columns: string[], data: any[] }) {
    return (
        <>
            {
                data.map((row, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        {columns.map((column, index) => (
                            <td key={index} className="px-6 py-4">
                                {row[column]}
                            </td>
                        ))}
                    </tr>
                ))
            }
        </>
    )
}
