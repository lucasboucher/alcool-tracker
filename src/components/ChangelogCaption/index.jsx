function ChangelogCaption({ className }) {
  return (
    <div className={`rounded-lg bg-dark-2 p-4 ${className}`}>
      <h2 className="text-sm font-bold uppercase">Légende</h2>
      <hr className="mt-2 border-dark-3 pb-2" />
      <div className="flex items-center">
        <span className="mr-2 h-2 w-2 rounded-full bg-green"></span>
        <p>Version actuelle</p>
      </div>
      <div className="flex items-center">
        <span className="mr-2 h-2 w-2 rounded-full bg-main"></span>
        <p>En cours de développement</p>
      </div>
      <div className="flex items-center">
        <span className="mr-2 h-2 w-2 rounded-full bg-red"></span>
        <p>Ancienne version</p>
      </div>
    </div>
  );
}

export default ChangelogCaption;
