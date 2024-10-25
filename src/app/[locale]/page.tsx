"use client";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import variables from '../scss/variables.module.scss'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Icon from '@mui/material/Icon';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
// import * as icons from '@mui/icons-material';
import { useEffect } from 'react';

import FormControl from '@mui/material/FormControl';
export default function HomePage() {
  const { mode, setMode } = useColorScheme();
  return (

    <FormControl >
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        size="small"
        label="Theme"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={mode}
        onChange={(event) =>
          setMode((event.target.value as 'system' | 'light' | 'dark'))
        }
        sx={{ minWidth: 120 }}
      >
        <MenuItem value='light'>Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">system</MenuItem>
      </Select>
      <Button variant="contained">Hello world</Button>;
    </FormControl>

  );
}