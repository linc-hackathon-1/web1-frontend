import React from 'react';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import Navigation from '@/components/organisms/Navigation';

interface PageTemplateProps {
  hideHeader?: boolean;
  pageName: string;
  hideFooter?: boolean;
  hideNavigation?: boolean;
  children: React.ReactNode;
}

function Page({
  hideHeader = false, pageName, hideFooter = false, hideNavigation = false, children,
}: PageTemplateProps) {
  return (
    <>
      {!hideHeader && <Header pageName={pageName} />}
      <article>
        {children}
      </article>
      {!hideFooter && <Footer />}
      {!hideNavigation && <Navigation />}
    </>
  );
}

export default Page;
