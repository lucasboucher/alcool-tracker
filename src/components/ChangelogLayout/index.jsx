function ChangelogLayout({ children, fallback }) {
  return (
    <div className="mx-auto max-w-screen-md px-4 pb-24 pt-8 text-sand12">
      {children || fallback}
    </div>
  );
}

export default ChangelogLayout;
