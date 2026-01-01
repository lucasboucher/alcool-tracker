function ChangelogCaption({ className }) {
  return (
    <div className={`rounded-lg bg-amber2 p-4 ${className}`}>
      <h2 className="text-sm font-bold uppercase">Légende</h2>
      <hr className="mt-2 border-amber6 pb-2" />
      <div className="flex items-center">
        <span className="mr-2 size-2 rounded-full bg-green9" />
        <p>Version actuelle</p>
      </div>
      <div className="flex items-center">
        <span className="mr-2 size-2 rounded-full bg-amber9" />
        <p>En cours de développement</p>
      </div>
      <div className="flex items-center">
        <span className="mr-2 size-2 rounded-full bg-red9" />
        <p>Ancienne version</p>
      </div>
      <hr className="mt-2 border-amber6 pb-2" />
      <p>
        Chaque version travaille plus ou moins sur un aspect précis de l'application, d'où le titre
        attribué à chacun.
      </p>
    </div>
  );
}

export default ChangelogCaption;
