import React from 'react';

export default function PageLayout({ children }) {

  return (
    <div className="w-full">
      <div className="tw-max-w-6xl tw-mx-auto">
        {children}
      </div>
    </div>
  );
}
