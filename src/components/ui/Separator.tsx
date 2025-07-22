

type SeparatorProps = {
    isVertical?: boolean;
}

const Separator = ({ isVertical = false }: SeparatorProps) => {

    if (isVertical) {
        return (
         <div className="w[1px] h-[15px] border border-gray-300"></div>
        );
    }
    return (
        <div className="w-full h-[1px] bg-gray-300 mt-2 mb-2"></div>
    )
}

export default Separator