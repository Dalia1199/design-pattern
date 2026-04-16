class PDFViewer {
  viewPDF(filename) {
  console.log(`Viewing PDF document: ${filename}`);
  }
}

class WordViewer {
  viewDOCX(filename) {
  console.log(`Viewing Word document: ${filename}`);
  }
}
class TextViewer {
  viewTXT(filename) {
    console.log(`Viewing Text file: ${filename}`);
  }
}

// Adapter Design Pattern
class DocumentAdapter {
  constructor() {
    this.pdfViewer = new PDFViewer();
      this.wordViewer = new WordViewer();
      this.textViewer = new TextViewer();
    }

  view(filename) {
    if (filename.endsWith(".pdf")) {
      this.pdfViewer.viewPDF(filename);
    } else if (filename.endsWith(".docx")) {
      this.wordViewer.viewDOCX(filename);
    }
    else if (filename.endsWith(".txt")) {
    this.textViewer.viewTXT(filename);
  }
    else {
      console.log("Unsupported file type ");
    }
  }
}


const viewer = new DocumentAdapter();
viewer.view("report.pdf");
viewer.view("resume.docx");
viewer.view("file.txt");