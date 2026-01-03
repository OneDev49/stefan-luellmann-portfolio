import CheckIcon from '@/components/icons/glyphs/CheckIcon';
import ExclamationIcon from '@/components/icons/glyphs/ExclamationIcon';
import InfoIcon from '@/components/icons/glyphs/InfoIcon';
import CloseIcon from '@/components/icons/ui/CloseIcon';

interface CalloutProps {
  type?: 'info' | 'warning' | 'danger' | 'success';
  heading: string;
  children: React.ReactNode;
}

export default function Callout({
  type = 'info',
  heading,
  children,
}: CalloutProps) {
  return (
    <div className='border-2 border-[#414141] flex flex-col gap-4 px-4 pt-4 pb-3 md:px-8 md:pt-8 md:pb-6 my-8 rounded-xl shadow-[0_4px_4px_0_rgb(0,0,0,0.5)]'>
      <strong className='flex gap-2 items-center'>
        {type === 'info' ? (
          <InfoIcon
            height={30}
            width={30}
            variant='shaped'
            className='text-[#00b2ff] min-w-7'
          />
        ) : type === 'success' ? (
          <CheckIcon
            height={30}
            width={30}
            variant='shaped'
            className='text-[#00ff26] min-w-7'
          />
        ) : type === 'danger' ? (
          <CloseIcon
            height={30}
            width={30}
            variant='shaped'
            className='text-[#da0000] min-w-7'
          />
        ) : (
          <ExclamationIcon
            height={30}
            width={30}
            variant='shaped'
            className='text-[#f6ff00] min-w-7'
          />
        )}
        <span className='font-heading text-xl'>{heading}</span>
      </strong>
      {children}
    </div>
  );
}
