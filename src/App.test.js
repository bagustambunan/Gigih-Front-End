import { render, screen } from '@testing-library/react';
import Gif from './components/Gif';

// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('render gif component', () => {
  render(<Gif/>);
  // const gif_title = screen.getByTestId('gif_title');
  // expect(gif_title).toBeInTheDocument();
  screen.debug();
});

test('check gif component', () => {
  render(<Gif/>);
  const gif_title = screen.getByTestId('gif_title');
  expect(gif_title).toBeInTheDocument();
});