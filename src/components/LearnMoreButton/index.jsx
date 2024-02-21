import { NavArrowDown as NavArrowDownIcon } from 'iconoir-react';
import { NavArrowUp as NavArrowUpIcon } from 'iconoir-react';

function LearnMoreButton({ isLearnMoreOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative top-[-8px] flex w-full justify-between rounded-b-lg border border-t-0 border-dark-3 px-2 pb-3 pt-5 font-medium transition-colors active:bg-dark-2"
    >
      En savoir plus
      {isLearnMoreOpen ? <NavArrowUpIcon /> : <NavArrowDownIcon />}
    </button>
  );
}

export default LearnMoreButton;
