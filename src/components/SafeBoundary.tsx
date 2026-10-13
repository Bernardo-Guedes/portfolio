
import { Component, type ErrorInfo, type ReactNode } from "react";

interface SafeBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface SafeBoundaryState {
    error: Error | null;
    componentStack: string;
}

export default class SafeBoundary extends Component<
    SafeBoundaryProps,
    SafeBoundaryState
> {
    state: SafeBoundaryState = {
        error: null,
        componentStack: "",
    };

    static getDerivedStateFromError(error: Error): Partial<SafeBoundaryState> {
        return { error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState({
            componentStack: info.componentStack ?? "",
        });

        console.error("Erro capturado pelo SafeBoundary:", error);
        console.error("Pilha de componentes:", info.componentStack);
    }

    render() {
        const { error, componentStack } = this.state;

        if (error) {
            return (
                <div className="m-4 rounded-xl border border-red-500 bg-black p-4 text-white">
                    <h2 className="mb-3 text-lg font-bold text-red-400">
                        Erro de execução
                    </h2>

                    <p className="mb-2 wrap-break-word">
                        <strong>{error.name}:</strong> {error.message}
                    </p>

                    <details open>
                        <summary className="cursor-pointer font-semibold text-red-300">
                            Detalhes do erro
                        </summary>

                        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap wrap-break-word text-xs">
                            {error.stack ?? "Pilha do erro indisponível"}
                        </pre>
                    </details>

                    <details className="mt-3">
                        <summary className="cursor-pointer font-semibold">
                            Pilha de componentes React
                        </summary>

                        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap wrap-break-word text-xs">
                            {componentStack || "Pilha de componentes indisponível"}
                        </pre>
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}
