import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import variables from '../scss/variables.module.scss'
import { ConnectButton } from '@rainbow-me/rainbowkit';
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1 style={{ color: variables.primaryColor }}>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      你好呀李银河
      <ConnectButton />
    </div>
  );
}