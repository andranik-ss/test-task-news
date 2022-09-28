import { PropsWithChildren } from 'react';

import './Layout.css';

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="layout">
      <div className="content">{children}</div>
    </div>
  );
}
