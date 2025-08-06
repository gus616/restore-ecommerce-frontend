export const formatCurrency = (
  value: number,
  locale: string = 'en-US',
  currency: string = 'USD'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(value);
};

export const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const day = tomorrow.getDate();
  const month = tomorrow.toLocaleString('default', { month: 'short' });
  return ` ${day} ${month}`;
};


{/* utils for mocking */}

export const getShippingDate = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  return `${day} ${month}`;
}