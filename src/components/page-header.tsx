import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

type PageHeaderProps = {
  title: string;
  date: string;
  backHref?: string;
  backLabel?: string;
};

export function PageHeader({
  title,
  date,
  backHref = '/',
  backLabel = 'Back',
}: PageHeaderProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col gap-4">
      <Link href={backHref} className="-ml-2 inline-flex items-center gap-0.5">
        <ChevronLeft className="h-4 w-4" /> {backLabel}
      </Link>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-pretty">
          {title}
        </h1>
        <div className="text-muted-foreground text-sm">
          <time dateTime={date} className="font-mono">
            {formattedDate}
          </time>
        </div>
      </div>
    </div>
  );
}
