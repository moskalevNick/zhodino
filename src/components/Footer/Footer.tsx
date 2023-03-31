import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { NavBarItamType, SocialMediasType } from '../../types';
import styles from './Footer.module.css';

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const NavBarItems: NavBarItamType[] = [
    {
      label: t('news'),
      path: '/news',
    },
    {
      label: t('structure'),
      path: '/structure',
    },
    {
      label: t('table'),
      path: '/table',
    },
    {
      label: t('photo'),
      path: '/photo',
    },
    {
      label: t('sponsors'),
      path: '/sponsors',
    },
    {
      label: t('attributes'),
      path: '/attributes',
    },
  ];

  const SocialMedias: SocialMediasType[] = [
    {
      label: 'telegram',
      path: 'https://web.telegram.org/',
      iconPath: 'images/telegram.png',
    },
    {
      label: 'tiktok',
      path: 'https://www.tiktok.com/',
      iconPath: 'images/tiktok.png',
    },
    {
      label: 'instagram',
      path: 'https://www.instagram.com/',
      iconPath: 'images/instagram.png',
    },
    { label: 'vk', path: 'https://vk.com/', iconPath: 'images/vk.png' },
  ];

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.navbar}>
          {NavBarItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end
              className={classNames(
                styles.navBarItem,
                location.pathname === item.path && styles.navBarItemActive
              )}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={styles.socialMediasWrapper}>
        {SocialMedias.map((media) => (
          <a
            className={styles.socialMedia}
            key={media.label}
            href={media.path}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={media.iconPath} alt={media.label} />
          </a>
        ))}
      </div>
      <div className={styles.legalInfoWrapper}>
        <div className={styles.legalInfoTextWrapper}>
          <div className={styles.legalInfoText}>{t('forward_citizens')}</div>
          <div className={styles.legalInfoText}>{t('champions')}</div>
          <div className={styles.legalInfoText}>{t('legal_info')}</div>
        </div>
        <div className={styles.flag}>
          <img src={'images/flag.png'} alt='flag icon' />
        </div>
      </div>
    </div>
  );
};
