// 파일 다운로드 컴포넌트
import React from 'react';

interface FileDownloadProps {
  url: string;
  fileName: string;
}

const FileDownload: React.FC<FileDownloadProps> = ({ url, fileName }) => {
  return (
    <a href={url} download={fileName}>
      Download {fileName}
    </a>
  );
};

export default FileDownload;