import { render, screen } from "@testing-library/react";
import ProductList from "../ProductList";
import { MemoryRouter } from "react-router-dom";

describe('ProductList', () => {


    it('render the list of products', () => {
        const products = [
            {
                id: 1,
                name: "Sample",
                description: "desc",
                brand: "brand",
                price: 100,
                pictureUrl: "url",
                quantityInStock: 5,
                type: "type",
                images: ["image1.jpg", "image2.jpg"], // <-- add this property!

            },
            {
                id: 2,
                name: "Sample",
                description: "desc",
                brand: "brand",
                price: 100,
                pictureUrl: "url",
                quantityInStock: 5,
                type: "type",
                images: ["image1.jpg", "image2.jpg"], // <-- add this property!
            }
        ];

        render(<MemoryRouter><ProductList products={products} /> </MemoryRouter>);

        expect(screen.getByText('Death Stranding 2')).toBeInTheDocument();
        expect(screen.getByText('$59.99')).toBeInTheDocument();
        expect(screen.getByText('The Last of Us Part II')).toBeInTheDocument();
        expect(screen.getByText('$49.99')).toBeInTheDocument();
    });
});