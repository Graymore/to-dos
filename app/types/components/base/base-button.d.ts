enum BaseButtonVariant {
  'primary',
  'secondary',
  'secondary-red',
}

export interface BaseButtonProps {
  variant?: keyof typeof BaseButtonVariant;
  disabled?: boolean;
}