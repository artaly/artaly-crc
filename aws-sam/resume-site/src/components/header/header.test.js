import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

describe("Header components", () => {
    it("Should render header components correctly", () => {
      render(<Header />);     
      screen.debug()
    });

    it("Check href in links", () => {
        render(<Header />);  
        
        expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', 'index.html');
        screen.debug()
      });
});