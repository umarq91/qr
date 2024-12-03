import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeGeneratorProps {
  url: string;
}

export const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ url }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      <QRCodeSVG 
        value={url} 
        size={200}
        level="H"
        includeMargin={true}
      />
      <p className="text-sm text-gray-600">Scan to view on mobile</p>
    </div>
  );
};