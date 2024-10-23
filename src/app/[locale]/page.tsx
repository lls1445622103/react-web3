import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import variables from '../scss/variables.module.scss'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Icon from '@mui/material/Icon';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
// import * as icons from '@mui/icons-material';

export default function HomePage() {
  // console.log(icons, 'icons')
  const t = useTranslations('HomePage');
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
    </div>
  );
}