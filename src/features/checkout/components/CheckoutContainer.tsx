import { useMemo, useState } from 'react'
import Card from '../../../components/ui/Card'
import CheckCard from '../../../components/ui/CheckCard'
import { useCart } from '../../../hooks/useCart'
import { useAppSelector } from '../../../store/store'
import CheckoutActions from './CheckoutActions'
import CheckoutDeliveryInfo from './CheckoutDeliveryInfo'
import { getRandomCreditCardNumber } from '../../../utils/utils'

const CheckoutContainer = () => {
  const [ageVerified, setAgeVerified] = useState(false);
  const { user } = useAppSelector((state) => state.auth)
  const { productsSelected, handleAdd,
    handleSubtract,
    handleRemove, getSubTotal } = useCart();

    const randomCreditCard = useMemo(() => getRandomCreditCardNumber(), []);


  return (
    <div className="w-[75%] mx-auto mt-1 ">
      <div className="md:grid md:grid-cols-12 gap-10 p-4 bg-gray-200 sm:flex sm:flex-col">
        {/* Left Column: Address */}
        <div className="col-span-8 flex flex-col gap-4">
          <Card title={user?.userName || ""} description="1234 Elm Street, Springfield, IL 62704" />
          <Card title={randomCreditCard} description="Credit available" />

          <CheckCard onCheck={setAgeVerified} />

          <CheckoutDeliveryInfo products={productsSelected} onAdd={handleAdd} onSubstract={handleSubtract} onRemove={handleRemove} />

        </div>

        {/* Right Column: Order Summary */}
        <div className="col-span-4">
          <CheckoutActions subtotal={getSubTotal()} isDisabled={ageVerified} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutContainer