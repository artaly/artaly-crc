import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer'

describe("Footer components", () => {
    it("Should render foot components correctly", () => {
      render(<Footer />);
    });

    it("Check if anchors have links", () => {
      render(<Footer />);  
      
      expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', 'https://github.com/bchiang7');
      expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', 'mailto:villalonalycahgmail.com');
      expect(screen.getAllByRole('link')[2]).toHaveAttribute('href', 'https://www.linkedin.com/in/alycahvillalon/');
      expect(screen.getAllByRole('link')[3]).toHaveAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      screen.debug()
    });
});