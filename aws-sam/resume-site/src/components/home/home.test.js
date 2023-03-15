import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Data from './Data'
import Home from './Home'
import ScrollDown from './ScrollDown'
import Social from './Social'

describe("Home components", () => {
    it("Should render home components correctly", () => {
      render(<Data />);
      render(<Home />);
      render(<ScrollDown />);
      render(<Social />);
     
      screen.debug()
    });

    it("Check if anchors have links", () => {
      render(<Social />);  
      
      expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', 'mailto:villalonalycahgmail.com');
      expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      expect(screen.getAllByRole('link')[2]).toHaveAttribute('href', 'https://www.linkedin.com/in/alycahvillalon/');
      screen.debug()
    });
});