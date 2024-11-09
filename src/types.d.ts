import 'react-scroll';

declare module 'react-scroll' {
  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    className?: string;
    onClick?: () => void;
  }

  export class Link extends React.Component<LinkProps> {}
}