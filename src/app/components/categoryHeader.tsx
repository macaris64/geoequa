export default function CategoryHeader({title, description}: { title: string, description: string }) {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption
                        className="p-5 text-lg font-semibold rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        {title}
                        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">{description}</p>
                    </caption>
                </table>
            </div>
        </>
    )
}
