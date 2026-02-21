import { siteData } from '@/config/siteData';

import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';

interface ImageBlockProps {
  description: string;
  src: string;
  caption?: boolean;
  className?: string;
}

export default function ImageBlock({
  description,
  src,
  caption = false,
}: ImageBlockProps) {
  return (
    <figure className='max-w-3xl mx-auto my-8'>
      <ImageSkeletonLoader
        draggable={false}
        priority={false}
        src={`${siteData.uploadThingUrl}/${src}`}
        alt={description}
        width={1200}
        height={628}
        sizes='(min-width: 1250px) 75vw, 100vw'
        className='h-auto border border-gray-800 rounded-md overflow-hidden'
      />
      {caption && (
        <figcaption className='flex gap-2 text-sm text-[#d3d3d3]'>
          <span className='underline'>Picture:</span>
          <span className='italic'>{description}</span>
        </figcaption>
      )}
    </figure>
  );
}
