const HomeIcon = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2zm0 2.414l6 6V18h-2v-6H8v6H6v-7.586l6-6z"
        fill={props.fill || 'currentColor'}
      />
    </svg>
  );
};

export default HomeIcon;