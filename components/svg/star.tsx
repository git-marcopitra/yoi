import { FC } from 'react';

import { SVGProps } from './svg.types';

const Star: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 20 26"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3358 1.2162C10.8815 -0.405148 9.11854 -0.405148 8.66424 1.2162L6.60274 10.5002L0.935391 12.0544C-0.311797 12.645 -0.311797 13.6936 0.935391 14.2842L6.60274 15.5002L8.66424 24.7842C9.11854 26.4055 10.8815 26.4055 11.3358 24.7842L13.3973 15.5002L19.0646 14.2842C20.3118 13.6936 20.3118 12.645 19.0646 12.0544L13.3973 10.5002L11.3358 1.2162Z"
      fill="currentColor"
    />
  </svg>
);

export default Star;
