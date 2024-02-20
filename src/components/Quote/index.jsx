import { Quote as QuoteIcon } from 'iconoir-react';

function Quote({ className, content }) {
  return (
    <div className={`flex gap-2 rounded-lg border border-dark-3 bg-dark-2 px-2 py-4 ${className} `}>
      <QuoteIcon className="shrink-0" height={24} width={24} />
      <p>{content}</p>
    </div>
  );
}

export default Quote;
