
type ButtonProps = {
    label: string,
    onClick?: () => void,
    bgColor?: string,
    textColor?: string,
    colorNumber?: number,
    hoverBgColor?: string,
    hoverTextColor?: string
    hoverColorNumber?: number,
    paddingX?: string
    paddingY?: string,
    fontSize?: string,
    width?: number | null
}

const Button = ({
    label,
    onClick,
    bgColor = "white",
    textColor = "black",
    colorNumber = 500,
    hoverBgColor = "gray",
    hoverTextColor = "black",
    hoverColorNumber = 100,
    paddingX = "4",
    paddingY = "4",
    fontSize = "sm",
    width = null
}: ButtonProps) => {
    return (
        <button className={`${width ? `w-[${width}px]` : "w-full" } rounded-full border ${`px-${paddingX}`} ${`py-${paddingY}`} text-sm ${bgColor === 'white' ? "bg-white" :
            `bg-${bgColor}-${colorNumber}`
            }  ${`hover:bg-${hoverBgColor}-${hoverColorNumber}`} cursor-pointer
               ${`hover: text-${hoverTextColor === 'black' ? "text-black" : `text-${hoverTextColor}-${hoverColorNumber}`}`}
               ${textColor === 'black' ? "text-black" : `text-${textColor}-${colorNumber}
               `}
            `}
            onClick={onClick}
        ><span className={`text-${fontSize}`}>{label}</span></button>
    )
}

export default Button