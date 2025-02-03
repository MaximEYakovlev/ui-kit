/**
 * Props for the Button component.
 */
export interface ButtonProps {
  /** Button text */
  label: string;
  /** Click event handler */
  onClick?: () => void;
  /** Button variant */
  variant?: 'primary' | 'secondary';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
}
