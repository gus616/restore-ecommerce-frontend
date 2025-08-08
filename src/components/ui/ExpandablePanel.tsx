import { ChevronDown, ChevronUp } from 'lucide-react'
import  { useState } from 'react'


type ExpandablePanelProps = {
    title?: string;
    content?: string;
    contentSecondary?: string;
}

const ExpandablePanel = ({ title, content, contentSecondary }: ExpandablePanelProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex flex-col items-left justify-center">
            <div className="flex text-center items-center gap-2 my-5 cursor-pointer hover:underline"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-md text-[#2162a1] hover:text-[#1c558f]">{title}</span>
                {
                    isOpen ? (
                        <ChevronUp size={20} />
                    ) : (
                        <ChevronDown size={20} />
                    )
                }

            </div>

            {isOpen && (
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <p>
                        {content}

                    </p>
                    <p>
                        {contentSecondary}
                    </p>
                </div>
            )}
        </div>

    )
}

export default ExpandablePanel