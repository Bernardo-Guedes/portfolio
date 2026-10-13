// components/SafeBoundary.tsx
import { Component, type ReactNode } from "react";

export default class SafeBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(e: unknown) { console.error(e); }
  render() { return this.state.failed ? (this.props.fallback ?? null) : this.props.children; }
}