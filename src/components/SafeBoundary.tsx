import { Component, type ErrorInfo, type ReactNode } from "react";

interface SafeBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface SafeBoundaryState {
    hasError: boolean;
}

export default class SafeBoundary extends Component<
    SafeBoundaryProps,
    SafeBoundaryState
> {
    state: SafeBoundaryState = {
        hasError: false,
    };

    static getDerivedStateFromError(): SafeBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error("Erro capturado pelo SafeBoundary:", error);
        console.error(
            "Pilha de componentes:",
            info.componentStack
        );

        if (error.stack) {
            console.error("Pilha do erro:", error.stack);
        }
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? null;
        }

        return this.props.children;
    }
}