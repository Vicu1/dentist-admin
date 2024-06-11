import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import UserStyled from '@/components/User/styled';

const User = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    deleteCookie('user');
    router.push('/login');
  };

  return (
    <UserStyled>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Выйти</MenuItem>
      </Menu>
      <IconButton onClick={handleClick}>
        <Avatar />
      </IconButton>
    </UserStyled>
  );
};

export default User;
