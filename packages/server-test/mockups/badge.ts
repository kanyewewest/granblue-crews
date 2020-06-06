import { Badge, BadgeTextColor, BadgeBackgroundColor } from '@gbc/models/badge';

const mock: Badge[] = [
  {
    id: '123456',
    name: 'Ba-ba-ba-badge!',
    description: 'Quite the badge',
    backgroundColor: BadgeBackgroundColor.GREEN,
    borderColor: BadgeBackgroundColor.DEFAULT,
    textColor: BadgeTextColor.WHITE,
    isBorderDashed: false,
  },
  {
    id: '123457',
    name: 'Yes, this is a badge',
    description: 'Another badge',
    backgroundColor: BadgeBackgroundColor.RED,
    borderColor: BadgeBackgroundColor.SILVER,
    textColor: BadgeTextColor.WHITE,
    isBorderDashed: true,
  },
  {
    id: '123458',
    name: 'Whats a badge',
    description: 'Another badge the second',
    backgroundColor: BadgeBackgroundColor.YELLOW,
    borderColor: BadgeBackgroundColor.BROWN,
    textColor: BadgeTextColor.BLACK,
    isBorderDashed: false,
  },
];
export default mock;
