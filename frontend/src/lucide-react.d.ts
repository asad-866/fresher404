declare module 'lucide-react' {
  import * as React from 'react';

  interface IconProps extends React.SVGAttributes<SVGSVGElement> {
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export const Award: React.FC<IconProps>;
  export const Search: React.FC<IconProps>;
  export const Filter: React.FC<IconProps>;
  export const Loader2: React.FC<IconProps>;
  export const ExternalLink: React.FC<IconProps>;
  export const Calendar: React.FC<IconProps>;
  export const CheckCircle: React.FC<IconProps>;
  export const MapPin: React.FC<IconProps>;
  export const Trophy: React.FC<IconProps>;
  export const Users: React.FC<IconProps>;
  export const Target: React.FC<IconProps>;
  export const Globe: React.FC<IconProps>;
  export const AlertCircle: React.FC<IconProps>;
}
