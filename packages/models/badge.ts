export enum BadgeBackgroundColor {
  BLACK = 'black',
  RED = 'red',
  BLUE = 'blue',
  BROWN = 'brown',
  GREEN = 'green',
  YELLOW = 'yellow',
  PURPLE = 'purple',
  SILVER = 'silver',
  DEFAULT = 'default',
}

export enum BadgeTextColor {
  WHITE = 'white',
  BLACK = 'black',
  SILVER = 'silver',
  DEFAULT = 'default',
}

export interface Badge {
  id?: string;
  name: string;
  description: string; // Long description
  backgroundColor: BadgeBackgroundColor;
  borderColor: BadgeBackgroundColor;
  textColor: BadgeTextColor;
  isBorderDashed: boolean;
}
