type Props = {
  pdfUrl: string;
};

const PdfViewer = ({ pdfUrl }: Props) => {
  return (
    <div className="w-screen h-screen">
      <iframe
        src={pdfUrl}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          border: "0",
        }}
        allowFullScreen
        allowTransparency={false}
      ></iframe>
    </div>
  );
};

export default PdfViewer;
