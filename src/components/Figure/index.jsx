function Figure({ number, text }) {
  return (
    <div className="flex h-24 w-full flex-col justify-center rounded bg-dark-3 px-2">
      <p class="mb-1 font-crucial text-4xl">{number}</p>
      <p class="text-sm">{text}</p>
    </div>
  );
}

export default Figure;
