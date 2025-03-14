import { render, screen, fireEvent } from '@testing-library/react';
import { InputRange } from '../components/InputRange';

describe('InputRange component', () => {
  it('renders correctly', () => {
    render(<InputRange value={50} onChange={() => {}} />);
    const rangeInput = screen.getByRole('slider');
    expect(rangeInput).toBeInTheDocument();
  });

  it('displays the correct value', () => {
    render(<InputRange value={75} onChange={() => {}} />);
    const rangeInput = screen.getByRole('slider') as HTMLInputElement;
    expect(rangeInput.value).toBe('75');
  });

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    render(<InputRange value={50} onChange={handleChange} />);

    const rangeInput = screen.getByRole('slider');
    fireEvent.change(rangeInput, { target: { value: '80' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(80);
  });
});
