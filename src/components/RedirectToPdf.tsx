import { useEffect } from "react";

type Props = {
  pdfUrl: string;
};

const RedirectToPdf = ({ pdfUrl }: Props) => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (isMobile) {
      window.location.href = pdfUrl;
    }
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="flex justify-center items-center">
      <h1>Dergimize yönlendiliyorsunuz...</h1>
      <a href={pdfUrl}>Dergiye gitmek için tıklayın.</a>
    </div>
  );
};

export default RedirectToPdf;
