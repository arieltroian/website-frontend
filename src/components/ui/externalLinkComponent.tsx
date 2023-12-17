interface ExternalLinkProps {
  to: string;
  children: React.ReactNode;
}

const ExternalLinkComponent: React.FC<ExternalLinkProps> = ({
  to,
  children,
}) => {
  const openLinkInNewTab = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    window.open(to, "_blank");
  };

  return (
    <a
      href={to}
      onClick={openLinkInNewTab}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLinkComponent;
