import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { ReactNode } from 'react';
interface navItemInterface {
    name: string,
    icon: ReactNode,
    url: string,
}

const navItems: navItemInterface[] = [
  {
    name: 'Приемы',
    icon: <CalendarMonthIcon />,
    url: '/appointments',
  },
  {
    name: 'Процедуры',
    icon: <VolunteerActivismIcon />,
    url: '/procedures',
  },
  {
    name: 'Клиенты',
    icon: <GroupIcon />,
    url: '/clients',
  },
  {
    name: 'Работники',
    icon: <AccountCircleIcon />,
    url: '/workers',
  },
];

export default navItems;
