import { FC } from 'react';

import { SVGProps } from './svg.types';

const Bars: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 448 512"
    fill="none"
    {...props}
  >
    <path
      d="M0 96C0 78.3 14.3 64 32 64H416C433.7 64 448 78.3 448 96C448 113.7 433.7 128 416 128H32C14.3 128 0 113.7 0 96ZM0 256C0 238.3 14.3 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.3 288 0 273.7 0 256ZM448 416C448 433.7 433.7 448 416 448H32C14.3 448 0 433.7 0 416C0 398.3 14.3 384 32 384H416C433.7 384 448 398.3 448 416Z"
      fill="currentColor"
    />
  </svg>
);

export default Bars;
