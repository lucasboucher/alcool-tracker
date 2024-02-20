function Figure({number, text}) {
    return (
        <div className="w-full flex flex-col justify-center bg-dark-3 rounded px-2 h-24">
            <p class="font-crucial text-4xl mb-1">{number}</p>
            <p class="text-sm">{text}</p>
        </div>
    );
}
  
export default Figure;
  