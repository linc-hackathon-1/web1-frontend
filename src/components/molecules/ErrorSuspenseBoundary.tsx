import { ReactNode, Suspense } from 'react';
import ErrorBoundary from '@components/atoms/ErrorBoundary';

interface ErrorSuspenseBoundaryProps {
  children?: ReactNode;
  errorFallback?: ReactNode;
  suspenseFallback?: ReactNode;
}

function ErrorSuspenseBoundary({
  children,
  errorFallback,
  suspenseFallback,
}: ErrorSuspenseBoundaryProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={suspenseFallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

export default ErrorSuspenseBoundary;
