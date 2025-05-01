
import { useState } from "react";
import { Upload } from "lucide-react";

const UploadArea = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    // Handle file drop logic here
    // const files = e.dataTransfer.files;
  };

  return (
    <div
      className={`border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
        isDragging ? "bg-blue-50 border-blue-300" : "border-gray-300 hover:border-blue-300 hover:bg-gray-50"
      }`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById('file-upload')?.click()}
    >
      <Upload className="h-12 w-12 text-blue-400 mb-2" />
      <p className="text-sm font-medium text-center">拖拽文件到此处或点击上传</p>
      <p className="text-xs text-gray-500 mt-1">支持 .txt, .json, .csv 等格式</p>
      <input id="file-upload" type="file" className="hidden" />
    </div>
  );
};

export default UploadArea;
