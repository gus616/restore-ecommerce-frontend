// src/components/Layout.tsx
import MiniCartPanel from '../features/cart/components/MiniCartPanel';
import Navbar from '../components/ui/Navbar';
import { useAppSelector } from '../store/store';
import Footer from '../components/ui/Footer';


const Layout = ({ children }: { children: React.ReactNode }) => {
    const { items } = useAppSelector((state) => state.cart);

    return (
        <div className="flex min-h-screen">
            <div className="flex flex-2 flex-col min-h-screen">
                <Navbar />

                <div className="flex flex-1 relative">
                    {/* Page Content */}
                    <main
                        className="flex-1"
                    >
                        {children}
                    </main>                
                </div>

                <Footer />
            </div>{
                items.length > 0 && (
                    <div className="min-h-screen bg-white shadow-lg z-50 animate-slide-in-left">
                        <MiniCartPanel items={items}/>
                    </div>
                )
            }
        </div>
    );
};

export default Layout;
