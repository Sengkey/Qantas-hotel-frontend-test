import { render, screen } from '@testing-library/react';
import Rating from './Rating';

describe('Rating module test',() => {

  beforeEach(() => {
    // const total = Rating.defaultProps.total; // 5
    render(<Rating value={4} />)
  });

  it('render all 5 rateIcons',() => {
    // screen.debug();
    const allIcons = screen.queryAllByTitle(/rateIcon/i);
    expect(allIcons).toHaveLength(5);
  });

  // test.todo('test total value is the same as number of stars/circle');

});