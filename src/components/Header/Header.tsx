import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import styles from './Header.module.css';
import { NavBarItamType } from '../../types';
import classNames from 'classnames';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

export const Header = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isEng, setEng] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const { t } = useTranslation();

  const changeLang = () => {
    setEng((prev) => !prev);
    localStorage.setItem('i18nextLng', isEng ? 'en' : 'ru');
    i18n.changeLanguage(isEng ? 'en' : 'ru');
  };

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

  return (
    <>
      {location.pathname === '/news' ? (
        <div className={styles.baner}>
          <div className={styles.langWrapperBanner}>
            <LanguageToggle
              checked={!isEng}
              onChange={changeLang}
              size={'long'}
            />
          </div>
          <div className={styles.bigEmblem}>
            <div className={styles.emblemWord}>{t('zhodino')}</div>
            <img src='images/bigEmblem.png' alt='bigEmblem' />
            <div className={styles.emblemWord}>{t('yuzhnoe')}</div>
          </div>
          <div className={styles.taglineWrapper}>
            <div className={styles.tagline}>{t('forward_citizens')}</div>
          </div>
        </div>
      ) : (
        <div className={styles.smallBannerWrapper}>
          <div className={styles.littleEmblemWrapper}>
            <img
              src='images/smallEmblem.png'
              alt='smallEmblem'
              className={styles.littleEmblemImg}
            />
          </div>
          <div className={styles.littleEmblemWors}>
            <div className={styles.firstEmblemWord}>
              {t('zhodino')}-{t('yuzhnoe')}
            </div>
            <div className={styles.secondEmblemWord}>
              {t('forward_citizens')}
            </div>
          </div>
          <div className={styles.langWrapperLittle}>
            <LanguageToggle
              checked={!isEng}
              onChange={changeLang}
              size={'long'}
            />
          </div>
        </div>
      )}
      <div className={styles.navBar}>
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
        <div className={styles.themeWrapper}>
          {isDark ? t('dark_mode') : t('light_mode')}
          <ThemeToggle
            checked={isDark}
            onChange={() => setIsDark((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
};
