import { Checkbox } from '@mui/material'
import { AlertTriangle } from 'lucide-react'
import { useState } from 'react';


type CheckCardProps = {
    onCheck: (value: boolean) => void;
}
const CheckCard = ({ onCheck }: CheckCardProps) => {
    const [checked, setChecked] = useState(false);

    const onCheckHandler = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        onCheck(newChecked);
    }
    return (
        <div className="w-full bg-white px-4 py-6 border rounded-md border-[#ffb14a] border-l-15 border-t-2 border-b-2 border-r-2">
            <div className="flex items-center justify-start gap-2 px-4">
                <AlertTriangle
                    className="w-5 h-5"
                    fill="#ffb14a"
                />
                <h2 className="text-l font-bold">Verify your age</h2>
            </div>
            <div className="flex items-center justify-start gap-2 px-2 mt-2">
                <Checkbox size="small" onChange={onCheckHandler} value={checked}/>
                <span className="text-sm">
                    By checking this box, you expressly declare that you are of the required age (18 years or older) to purchase these types of products.
                </span>
            </div>
        </div>
    )
}

export default CheckCard