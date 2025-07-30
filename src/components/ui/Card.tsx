
type CardProps = {
    title: string;
    description: string;
    changeHandler?: () => void;
}

const Card = ({title, description}: CardProps) => {
    return (
        <div className="w-full bg-white px-4 py-10">
            <div className="flex items-center justify-between bg-white">
                <h2 className="text-xl font-bold">Delivering to {title}</h2>
                <span className="text-[#2162a1] text-sm hover:underline cursor-pointer">Change</span>
            </div>
            <div className="max-w-[70%]">
                <p className="text-sm mt-2">
                    {description}
                </p>
            </div>

        </div>
    )
}

export default Card