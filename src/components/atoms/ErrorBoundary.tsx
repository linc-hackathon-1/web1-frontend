import { Component, ErrorInfo, ReactNode } from 'react';
import axios from 'axios';
import Container from '@components/atoms/Container';
import { fetchErrorMessages, STATUS_NOT_DEFINED } from '@constants/errorMessage';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
}
interface ErrorBoundaryState {
  statusCode: number;
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      statusCode: STATUS_NOT_DEFINED,
      hasError: false,
    };
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    const { children: prevChildren } = this.props;

    if (prevProps.children !== prevChildren) {
      this.setState({ hasError: false, statusCode: STATUS_NOT_DEFINED });
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo.componentStack);
  }

  static getDerivedStateFromError(error: Error) {
    const ret: {
      hasError: boolean,
      statusCode: number,
    } = {
      hasError: true,
      statusCode: STATUS_NOT_DEFINED,
    };

    if (axios.isAxiosError(error)) {
      ret.statusCode = error.response?.status || STATUS_NOT_DEFINED;
    }

    return ret;
  }

  render() {
    const {
      statusCode, hasError,
    } = this.state;

    const {
      fallback, children,
    } = this.props;

    if (hasError) {
      return fallback || (
        <Container
          size="full-width"
          justifyContents="justify-center"
          classes="px-5"
        >
          <p>{fetchErrorMessages[statusCode]}</p>
        </Container>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
