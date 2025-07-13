
type FooterProps = {
    showGoToTop?: boolean,
}

const Footer = ({ showGoToTop = true }: FooterProps) => {


    const footerItems = [
        { id: 's1', title: "Meet Us", items: ["Careers", "Blog", "About Us", "Investor Relations"] },
        { id: 's2', title: "Make Money with Us", items: ["Sell products on Amazont", "Sell apps on Amazont Business", "Become an Affiliate", "Advertise Your Products", "Self-Publish with Us", "Host an Amazont Hub"] },
        { id: 's3', title: "Amazont Payment Products", items: ["Amazont Rewards Visa Signature Cards", "Amazont.com Store Card", "Amazont Business Card", "Amazont.com Corporate Credit Line", "Shop with Points", "Credit Card Marketplace", "Amazont Currency Converter"] },
        { id: 's4', title: "Let Us Help You", items: ["Your Account", "Your Orders", "Shipping Rates & Policies", "Returns & Replacements", "Manage Your Content and Devices", "Amazont Assistant", "Help"] }
    ];

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <footer className="flex flex-col w-full ">
                {showGoToTop && <div className="flex justify-center items-center w-full bg-[#37475A] hover:bg-[#485769] py-4 cursor-pointer"
                    onClick={handleBackToTop}>
                    <h2 className="text-sm text-white text-center" >Back to top </h2>
                </div>}
                <div className="grid grid-cols-4 w-full  bg-[#232F3E] items-start justify-center px- py-10 gap-2">
                    {footerItems.map((section, index) => (
                        <div key={section.id} className="flex flex-col items-start justify-start mt-4 w-[200px]">
                            <div key={index} className="flex flex-col items-start justify-start">
                                <h3 className="text-md text-white font-semibold mb-2">{section.title}</h3>
                                {section.items.map((item, itemIndex) => (
                                    <span key={itemIndex} className="text-sm text-white cursor-pointer hover:underline mb-1">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}


                </div>

                <div className="flex flex-col items-center justify-center w-full bg-[#131A22] py-5">

                    <span className="text-xs text-white cursor-pointer hover:underline">Condition of Use | Privacy Note </span>
                    <span className="text-xs text-white cursor-pointer hover:underline">© 1996-2025, Amazont.com, Inc. or its affiliates</span>
                </div>

            </footer>
        </div>
    )
}

export default Footer