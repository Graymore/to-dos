enum BaseCheckboxVariant {
  'rounded',
  'square',
}

export interface BaseCheckboxProps {
  variant?: keyof typeof BaseCheckboxVariant;
  value: string;
  label?: string;
  checked?: boolean;
}