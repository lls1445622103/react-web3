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
// import * as icons from '@mui/icons-material';
import { useEffect } from 'react';
import { useThemeToggle } from '../MaterialProvider';
export default function HomePage() {
  // console.log(icons, 'icons')
  const t = useTranslations('HomePage');
  const { toggleTheme, isDarkMode } = useThemeToggle();
  const { mode, setMode } = useColorScheme();
  useEffect(() => {
    console.log(mode, 'mode')
  }, [mode]);
  const bool = false
  return (
    <div>
      <h1 style={{ color: variables.primaryColor }}>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      你好呀李银河
      <ConnectButton />
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Icon >add_circle</Icon>
        <DeleteSharpIcon />
      </Stack>
      <Select
        value={isDarkMode}
        onChange={(event) =>
          toggleTheme(event.target.value)
        }
        sx={{ minWidth: 120 }}
      >
        <MenuItem value='light'>Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </div>
  );
}