import { Quote as QuoteIcon } from 'iconoir-react';

function Quote({ className, content }) {
  return (
    <div
      className={`z-10 flex gap-2 rounded-lg border border-amber6 bg-amber2 px-2 py-4 ${className}`}
    >
      <QuoteIcon className="shrink-0" aria-hidden="true" role="presentation" />
      <blockquote>{content}</blockquote>
    </div>
  );
}

export default Quote;
