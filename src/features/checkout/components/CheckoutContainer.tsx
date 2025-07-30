import Card from '../../../components/ui/Card'
import CheckCard from '../../../components/ui/CheckCard'
import { useAppSelector } from '../../../store/store'
import CheckoutActions from './CheckoutActions'

const CheckoutContainer = () => {
  const { user } = useAppSelector((state) => state.auth)
  return (
    <div className="w-[75%] mx-auto mt-1">
      <div className="grid grid-cols-12 gap-10 p-4 bg-gray-200">
        {/* Left Column: Address */}
        <div className="col-span-8 flex flex-col gap-4">
          <Card title={user?.userName || ""} description="1234 Elm Street, Springfield, IL 62704" />
          <Card title="Mastercard 1234" description="Credit available" />

          <CheckCard />
        </div>

        {/* Right Column: Order Summary */}
        <div className="col-span-4">
          <CheckoutActions />
        </div>
      </div>
    </div>
  )
}

export default CheckoutContainer