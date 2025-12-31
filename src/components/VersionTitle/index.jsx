function VersionTitle({ version, name, state, className }) {
  let backgroundClassName = '';
  if (state === 'wip') {
    backgroundClassName = 'bg-amber9';
  } else if (state === 'current') {
    backgroundClassName = 'bg-green9';
  }

  return (
    <div className={`flex items-center ${className}`}>
      <h2 className="font-crucial text-xl">
        v{version} \{name}
      </h2>
      {state === 'old' ? (
        <span className="ml-2 h-2 w-2 rounded-full bg-red9" />
      ) : (
        <div className="relative ml-2 flex h-3 w-3 items-center justify-center">
          <span
            className={`absolute h-full w-full animate-ping rounded-full opacity-75 ${backgroundClassName}`}
          />
          <span className={`h-2 w-2 rounded-full ${backgroundClassName}`} />
        </div>
      )}
    </div>
  );
}

export default VersionTitle;
