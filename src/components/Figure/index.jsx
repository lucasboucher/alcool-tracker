function Figure({ number, text }) {
  const formattedNumber = number.toFixed(2);

  return (
    <div className="flex w-full flex-col justify-center rounded bg-dark-2 px-2 py-4">
      <p className="mb-1 font-crucial text-4xl">{formattedNumber}</p>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}

export default Figure;
