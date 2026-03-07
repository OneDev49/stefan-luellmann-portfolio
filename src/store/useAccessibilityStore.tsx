import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type FontSize = 'small' | 'normal' | 'large';

export const fontSizeMap = {
  small: '14px',
  normal: '16px',
  large: '18px',
};

interface SettingsState {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

export const useAccessibilityStore = create<SettingsState>()(
  persist(
    (set) => ({
      fontSize: 'normal',
      setFontSize: (size) => set({ fontSize: size }),
    }),
    {
      name: 'user-font-settings',
    }
  )
);
