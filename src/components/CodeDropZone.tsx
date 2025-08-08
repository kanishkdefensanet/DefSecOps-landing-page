
import { useState, useCallback } from 'react';
import { Upload, FileCode, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface UploadedFile {
  name: string;
  size: number;
  type: string;
}

const CodeDropZone = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const codeFiles = files.filter(file => 
      file.name.endsWith('.js') || 
      file.name.endsWith('.ts') || 
      file.name.endsWith('.jsx') || 
      file.name.endsWith('.tsx') ||
      file.name.endsWith('.py') ||
      file.name.endsWith('.java') ||
      file.name.endsWith('.cpp') ||
      file.name.endsWith('.c') ||
      file.name.endsWith('.go') ||
      file.name.endsWith('.rs')
    );

    const newFiles = codeFiles.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type || 'text/plain'
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newFiles = files.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type || 'text/plain'
      }));
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const generateReport = () => {
    setIsGeneratingReport(true);
    // Simulate report generation
    setTimeout(() => {
      setIsGeneratingReport(false);
      // Here you would typically trigger actual report generation
    }, 3000);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-8">
      {/* Drop Zone */}
      <Card className={`glass-effect transition-all duration-300 ${
        isDragOver ? 'border-luxury-500 bg-luxury-500/10' : 'border-luxury-500/30'
      }`}>
        <CardContent className="p-12">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="text-center space-y-6"
          >
            <div className="flex justify-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                isDragOver ? 'bg-luxury-500' : 'bg-luxury-500/20'
              }`}>
                <Upload className={`w-10 h-10 transition-all duration-300 ${
                  isDragOver ? 'text-white' : 'text-luxury-300'
                }`} />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Drop Your Code Files Here
              </h3>
              <p className="text-gray-300 text-lg">
                Upload your source code for instant security analysis
              </p>
              <p className="text-gray-400">
                Supports: .js, .ts, .jsx, .tsx, .py, .java, .cpp, .c, .go, .rs
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => document.getElementById('file-input')?.click()}
                className="bg-gradient-to-r from-luxury-600 to-electric-600 hover:from-luxury-700 hover:to-electric-700 px-8 py-3 text-lg font-semibold"
              >
                <FileCode className="w-5 h-5 mr-2" />
                Browse Files
              </Button>
              <span className="text-gray-400">or drag and drop</span>
            </div>

            <input
              id="file-input"
              type="file"
              multiple
              accept=".js,.ts,.jsx,.tsx,.py,.java,.cpp,.c,.go,.rs"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <Card className="glass-effect">
          <CardContent className="p-8">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
              Uploaded Files ({uploadedFiles.length})
            </h4>
            
            <div className="space-y-3 mb-8">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-luxury-500/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileCode className="w-5 h-5 text-luxury-300" />
                    <span className="text-white font-medium">{file.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {formatFileSize(file.size)}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">Ready</span>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={generateReport}
              disabled={isGeneratingReport}
              className="bg-gradient-to-r from-luxury-600 to-electric-600 hover:from-luxury-700 hover:to-electric-700 px-8 py-3 text-lg font-semibold w-full sm:w-auto"
            >
              {isGeneratingReport ? (
                <>
                  <AlertCircle className="w-5 h-5 mr-2 animate-spin" />
                  Generating Security Report...
                </>
              ) : (
                <>
                  <FileCode className="w-5 h-5 mr-2" />
                  Generate Security Report
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CodeDropZone;
