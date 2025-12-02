'use client';

import { useMemo } from 'react';

interface FormattedDateProps {
  dateString: string;
  className?: string;
}

const formatter = new Intl.DateTimeFormat('de-DE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export default function FormattedDate({
  dateString,
  className = '',
}: FormattedDateProps) {
  const formattedDate = useMemo(() => {
    return formatter.format(new Date(dateString));
  }, [dateString]);

  return (
    <time dateTime={dateString} className={className}>
      {formattedDate}
    </time>
  );
}
