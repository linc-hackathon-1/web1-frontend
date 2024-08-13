import React from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

interface PageTemplateProps {
  hideHeader?: boolean;
  pageName: string;
  hideFooter?: boolean;
  children: React.ReactNode;
}

function Page({
  hideHeader = false, pageName, hideFooter = false, children,
}: PageTemplateProps) {
  return (
    <>
      {!hideHeader && <Header pageName={pageName} />}
      <article>
        {children}
      </article>
      {!hideFooter && <Footer />}
    </>
  );
}

export default Page;
