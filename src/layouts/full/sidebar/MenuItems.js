import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Orders',
    icon: IconAperture,
    href: '/orders',
  },
  {
    id: uniqueId(),
    title: 'Tracking',
    icon: IconUserPlus,
    href: '/order-tracking',
  },
];

export default Menuitems;
