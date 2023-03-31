import styles from './ThemeToggle.module.css';
import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

export type ToggleSwitchProps = {
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  value?: number | string;
  disabled?: boolean;
  className?: string;
  readOnly?: boolean;
  size?: 'long' | 'short';
  isWidget?: boolean;
};

export const ThemeToggle: React.FC<ToggleSwitchProps> = ({
  name,
  onChange,
  checked,
  value,
  disabled = false,
  readOnly = false,
  className,
  size = 'long',
  isWidget = false,
}) => {
  const toggleSwitchClass = classNames(
    styles.switch,
    size === 'short' && styles.shortSwitch,
    className
  );

  const sliderClasses = classNames(
    styles.slider,
    isWidget && styles.widgetSlider,
    isWidget && checked && styles.activeWidgetSlider
  );

  return (
    <label className={toggleSwitchClass}>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
      />
      <span className={sliderClasses}>
        <div className={styles.firstLabel}></div>
        <div className={styles.secondLabel}></div>
      </span>
    </label>
  );
};
