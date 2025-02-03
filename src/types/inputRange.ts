/**
 * Props for the InputRange component.
 */
export interface InputRangeProps {
  /** Current value of the range input */
  value: number;
  /** Callback function when the value changes */
  onChange: (value: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step value */
  step?: number;
}
