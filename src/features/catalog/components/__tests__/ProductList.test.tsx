import { render, screen } from "@testing-library/react";
import ProductList from "../ProductList";

describe('ProductList', () => {

    
    it('render the list of products', () => {
        const products = [
            {
                id: 1,
                name: 'Death Stranding 2',
                description: 'An open-world action game',
                brand: 'Kojima Productions',
                price: 59.99,
                pictureUrl: 'https://example.com/death-stranding-2.jpg',
                quantityInStock: 100,
                type: 'Video Game'
            },
            {
                id: 2,
                name: 'The Last of Us Part II',
                description: 'A narrative-driven action-adventure game',
                brand: 'Naughty Dog',
                price: 49.99,
                pictureUrl: 'https://example.com/last-of-us-part-ii.jpg',
                quantityInStock: 50,
                type: 'Video Game'
            }
        ];

        render(<ProductList products={products} />);

        expect(screen.getByText('Death Stranding 2')).toBeInTheDocument();
        expect(screen.getByText('$59.99')).toBeInTheDocument();
        expect(screen.getByText('The Last of Us Part II')).toBeInTheDocument();
        expect(screen.getByText('$49.99')).toBeInTheDocument();
    });
});