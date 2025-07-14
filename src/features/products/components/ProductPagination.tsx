import { ChevronLeft, ChevronRight } from 'lucide-react'


type ProductPaginationProps = {
    paginationSize: number;
    currentPage: number;
}

const ProductPagination = ({paginationSize, currentPage} : ProductPaginationProps) => {
    return (
        <div className="mx-auto flex justify-center mt-8">
            <nav className="inline-flex -space-x-px">
                <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 cursor-pointer">
                    <ChevronLeft size={18} className="text-gray-500 font-bold hover:text-gray-700 cursor-pointer" />
                    <span className="text-gray-500">Previous</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm ">

                    {
                        Array.from({ length: paginationSize }, (_, index) => (
                            <div
                                key={index}
                                className={`px-3 py-2  border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-md cursor-pointer ${index + 1 === currentPage ? 'bg-gray-200 text-gray-700' : ''}`}
                            >
                                {index + 1}
                            </div>
                        ))
                    }
                </div>

                <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 cursor-pointer">
                    <span className="text-gray-500">Next</span>
                    <ChevronRight size={18} className="text-gray-500 font-bold hover:text-gray-700 cursor-pointer" />
                </div>
            </nav>
        </div>
    )
}

export default ProductPagination