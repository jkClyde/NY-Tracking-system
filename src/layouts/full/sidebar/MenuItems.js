import { IconAperture, IconLayoutDashboard, IconUserPlus } from '@tabler/icons';

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
  {
    id: uniqueId(),
    title: 'About',
    icon: IconUserPlus,
    href: '/about-us',
  },
  {
    id: uniqueId(),
    title: 'Customers',
    icon: IconUserPlus,
    href: '/customers-table',
  },
];

export default Menuitems;
