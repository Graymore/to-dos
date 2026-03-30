enum IconList {
  'close',
  'plus',
  'pen',
  'delete'
}

export interface UiIconProps {
  name: keyof typeof IconList;
}