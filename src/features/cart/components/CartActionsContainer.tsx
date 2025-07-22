import Separator from '../../../components/ui/Separator'

const CartActionsContainer = () => {

    const actions = [
        { label: 'Delete', action: () => console.log('Delete action') },
        { label: 'Save for later', action: () => console.log('Save for later action') },
        { label: 'See more related items', action: () => console.log('See more related items action') },
        { label: 'Share', action: () => console.log('Share action') },
    ];

    return (
        <div className="flex items-center justify-start p-2 gap-2">
            {
                actions.map((action, index) => (
                    <div className='flex items-center gap-2' key={index + "-div"}>
                        <Separator isVertical={true} key={index + "-separator"} />
                        <span
                            key={index + "-action"}
                            className="text-[#2162a1] hover:underline cursor-pointer text-xs"
                            onClick={action.action}
                        >
                            {action.label}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default CartActionsContainer