import { PDFViewer } from "@embedpdf/react-pdf-viewer";

const ProjectOneArch = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg dark:border-gray-600">
        <PDFViewer
          config={{
            src: "https://rawcdn.githack.com/AdithyaShenal/AdithyaShenal.github.io/312dd2f64254988bfa3be94b05ab298c3a812dc9/System%20Architecture.pdf",
            theme: { preference: "dark" },
            disabledCategories: [
              "annotation",
              "print",
              "export",
              "redaction",
              "panel",
            ],
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
};

export default ProjectOneArch;
