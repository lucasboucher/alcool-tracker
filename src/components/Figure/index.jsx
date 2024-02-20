function Figure({ number, text }) {
  const formattedNumber = Math.round(number * 100) / 100;

  return (
    <div className="flex h-24 w-full flex-col justify-center rounded bg-dark-3 px-2">
      <p className="mb-1 font-crucial text-4xl">{formattedNumber}</p>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default Figure;
