import { ChevronLeft, ChevronRight } from 'lucide-react'


type ProductPaginationProps = {
    totalCount: number,
    pageSize: number,
    pageNumber?: number,
    paginationHandler?: (page: number) => void
}

const ProductPagination = ({ totalCount, pageSize = 5, pageNumber = 1, paginationHandler }: ProductPaginationProps) => {

    const nextPage = () => {
        if (paginationHandler) {
            paginationHandler(pageNumber + 1);
        }
    }

    const previousPage = () => {
        console.log(pageNumber)
        if (paginationHandler && pageNumber! > 1) {
            paginationHandler(pageNumber! - 1);
        }
    }
    return (
        <div className="mx-auto flex justify-center mt-8">
            <nav className="inline-flex -space-x-px">
                <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 cursor-pointer"

                    onClick={previousPage}
                >
                    <ChevronLeft size={18} className="text-gray-500 font-bold hover:text-gray-700 cursor-pointer"
                    />
                    <span className="text-gray-500">Previous</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm ">

                    {
                        Array.from({ length: Math.ceil(totalCount / pageSize) }, (_, index) => (
                            <div
                                key={index}
                                onClick={() => paginationHandler && paginationHandler(index + 1)}

                                className={`px-3 py-2  border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-md cursor-pointer ${index + 1 === pageNumber ? 'bg-gray-200 text-gray-700' : ''}`}
                            >
                                {index + 1}
                            </div>
                        ))
                    }
                </div>

                <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 cursor-pointer"
                    onClick={nextPage}
                >
                    <span className="text-gray-500">Next</span>
                    <ChevronRight size={18} className="text-gray-500 font-bold hover:text-gray-700 cursor-pointer"
                    />
                </div>
            </nav>
        </div>
    )
}

export default ProductPagination