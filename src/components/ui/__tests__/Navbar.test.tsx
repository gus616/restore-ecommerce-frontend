import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe('Navbar', () => {
    it('renders logo image', () => {
        render(<Navbar />);
        const logoImage = screen.getByAltText('logo');
        expect(logoImage).toBeInTheDocument();
    });

    it('shows delivery location text', () => {
        render(<Navbar />);
        const deliveryText = screen.getByText('Deliver to');
        expect(deliveryText).toBeInTheDocument();
    });

    it('shows search input on desktop', () => {
        render(<Navbar />);
        const searchInput = screen.getByLabelText('search-input-desktop');
        expect(searchInput).toBeInTheDocument();
    });

    it('shows cart icon with badge', () => {
        render(<Navbar />);
        const badge = screen.getByText('2');
        expect(badge).toBeInTheDocument();
    });

    it('toggles mobile menu on button click', () => {
        render(<Navbar />);
        const menuButton = screen.getByRole('button', {name: /menu/i});

        console.log(menuButton);
        expect(menuButton).toBeInTheDocument();

        fireEvent.click(menuButton);

        expect(screen.getByText(/Hello, Gus — Account & Lists/i)).toBeInTheDocument();
    });

    it('shows mobile search input when screen is small', () => {
        window.innerWidth = 375;
        window.dispatchEvent(new Event('resize'));

        render(<Navbar />);
        expect(screen.getAllByPlaceholderText(/Search products, brands and more/i)).toHaveLength(2);
    })
});