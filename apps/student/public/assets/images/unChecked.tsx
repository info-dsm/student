const UnChecked = () => {
  const icon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="7.25" stroke="#888888" stroke-width="1.5" />
      <rect x="4" y="7" width="8" height="2" fill="#888888" />
    </svg>
  );

  return <>{icon()}</>;
};

export default UnChecked;
