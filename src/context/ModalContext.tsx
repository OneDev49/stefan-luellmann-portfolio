'use client';

import GetInTouchModal from '@/components/ui/GetInTouchModal';
import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalContextProps {
  openGetInTouch: () => void;
  closeGetInTouch: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openGetInTouch = () => setIsOpen(true);
  const closeGetInTouch = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openGetInTouch, closeGetInTouch, isOpen }}>
      {children}
      <GetInTouchModal isOpen={isOpen} onClose={closeGetInTouch} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
