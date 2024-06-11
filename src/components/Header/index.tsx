'use client';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { IconButton, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react';
import { Else, If, Then, When } from 'react-if';

import logo from '@/assets/logo.png';
import smallLogo from '@/assets/small-logo.png';
import navItems from '@/components/Header/NavItems';
import HeaderStyled from '@/components/Header/styled';
interface HeaderProps {
  open: boolean,
  setOpen: (value: (prevState: boolean) => boolean) => void
}
const Header: FC<HeaderProps> = ({ open, setOpen }) => {
  const theme = useTheme();
  const activeSegment = useSelectedLayoutSegment();

  return (
    <HeaderStyled
      theme={theme}
      open={open}
    >
      <Link
        className={'logo'}
        href={'/'}
      >
        <If condition={open}>
          <Then>
            <Image
              width={200}
              height={70}
              src={logo}
              alt={'Logo'}
            />
          </Then>
          <Else>
            <Image
              width={80}
              height={70}
              src={smallLogo}
              alt={'Logo'}
            />
          </Else>
        </If>
      </Link>
      <nav>
        <ul>
          {navItems.map(item =>
            <li
              className={`/${activeSegment}` === item.url ? 'active' : ''}
              key={item.url}
            >
              <Link href={item.url}>
                <div className={'nav-item-icon'}>
                  {item.icon}
                </div>
                <When condition={open}>
                  {item.name}
                </When>
              </Link>
            </li>
          )}
        </ul>
        <IconButton
          className={'header-button'}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <ExpandCircleDownIcon />
        </IconButton>
      </nav>
    </HeaderStyled>
  );
};
export default Header;
