import { cn } from '@/lib/utils';
import React from 'react';
import { highlight } from 'sugar-high';

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  code?: string;
}

function Code({ className, children, ...props }: CodeProps) {
  const code = typeof children === 'string' ? children : '';
  const html = code;

  return (
    <code
      className={cn('bg-muted rounded px-[0.3rem] py-[0.2rem]', className)}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
}

function Pre({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  // Use the child directly if it's a code element, otherwise find it
  const codeElement = React.Children.toArray(children).find((child) =>
    React.isValidElement(child),
  ) as React.ReactElement | undefined;

  const code = (codeElement?.props as React.PropsWithChildren<any>)?.children;
  const codeString = typeof code === 'string' ? code : '';

  if (!codeString) {
    return (
      <pre className={cn('bg-muted rounded-lg p-4', className)} {...props}>
        {children}
      </pre>
    );
  }

  const highlightedHtml = highlight(codeString);
  const lines = highlightedHtml.split('\n').slice(0, -1);

  return (
    <pre
      className={cn(
        'bg-muted overflow-x-auto rounded-lg p-4 font-mono text-sm',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col">
        {lines.map((line, i) => (
          <span key={i} dangerouslySetInnerHTML={{ __html: line || ' ' }} />
        ))}
      </div>
    </pre>
  );
}

export const MDXComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-10 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-10 mb-4 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-8 mb-4 scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn('leading-7 not-first:mt-4', className)} {...props} />
  ),
  pre: Pre,
  code: Code,
};
