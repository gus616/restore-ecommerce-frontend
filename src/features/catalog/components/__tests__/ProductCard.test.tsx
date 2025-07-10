// src/components/__tests__/ProductCard.test.tsx
import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';
import type { Product } from '../../../../models/Product';
import { MemoryRouter } from 'react-router-dom';

describe('ProductCard', () => {
  it('renders the product title', () => {

    const product: Product = {
      id: 1,
      name: 'Death Stranding 2',
      description: 'An open-world action game',
      brand: 'Kojima Productions',
      price: 59.99,
      pictureUrl: 'https://example.com/death-stranding-2.jpg',
      quantityInStock: 100,
      type: 'Video Game'
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
