function Figure({ number, text }) {
  const formattedNumber = number.toFixed(2);

  return (
    <div className="flex h-24 w-full flex-col justify-center rounded bg-dark-2 px-2">
      <p className="mb-1 font-crucial text-4xl">{formattedNumber}</p>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}

export default Figure;
