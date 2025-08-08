// src/components/__tests__/ProductCard.test.tsx
import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import type { Product } from '../../../../models/Product';
import { MemoryRouter } from 'react-router-dom';

describe('ProductCard', () => {
  it('renders the product title', () => {

    const product: Product = {
      id: 1,
      name: "Sample",
      description: "desc",
      brand: "brand",
      price: 100,
      pictureUrl: "url",
      quantityInStock: 5,
      type: "type",
      images: ["image1.jpg", "image2.jpg"], 
    }

    render(
      <MemoryRouter>
        <ProductCard
          product={product}
        />
      </MemoryRouter>

    );

    expect(screen.getByText("Death Stranding 2")).toBeInTheDocument();
    expect(screen.getByText('$59.99')).toBeInTheDocument();
  });
});
