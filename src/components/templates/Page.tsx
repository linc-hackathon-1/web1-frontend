import React from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

interface PageTemplateProps {
  showHeader: boolean;
  pageName: string;
  showFooter: boolean;
  children: React.ReactNode;
}

function Page({
  showHeader, pageName, showFooter, children,
}: PageTemplateProps) {
  return (
    <>
      {showHeader && <Header pageName={pageName} />}
      <article>
        {children}
      </article>
      {showFooter && <Footer />}
    </>
  );
}

export default Page;
