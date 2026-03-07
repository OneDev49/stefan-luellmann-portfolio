'use client';

import ChevronUpIcon from '@/components/icons/ui/ChevronUpIcon';

export default function FooterScrollTop() {
  return (
    <div className='pb-12 pt-16'>
      <div className='bg-gradient-to-r from-[#00024d] to-[#002141] flex justify-center py-4'>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='flex flex-col items-center leading-4 group'
        >
          <ChevronUpIcon
            height={20}
            width={20}
            className='group-hover:-translate-y-1 transition-transform duration-150'
          />
          Jump to the Top
        </button>
      </div>
    </div>
  );
}
