import TableData from "@/app/components/tableData";

export default function Table({title, description, columns, data}: { title: string, description: string, columns: string[], data: any[] }) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption
                    className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    {title}
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">{description}</p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {columns.map((column: string, index: number) => (
                        <th key={index} scope="col" className="px-6 py-3">
                            {column}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <TableData columns={columns} data={data}/>
                </tbody>
            </table>
            <div className='grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700'>
                <div>
                    <a href="#"
                       className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900">
                        Analyze with AI
                    </a>
                </div>
            </div>
        </div>
    )
}