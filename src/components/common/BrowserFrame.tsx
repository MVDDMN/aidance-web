import type { ReactNode } from "react";

interface BrowserFrameProps {
    children: ReactNode;
    title?: string;
}

export default function BrowserFrame({
    children,
    title = "aidanceagency.com",
}: BrowserFrameProps) {
    return (
        <div className="browser-frame">
            <div className="browser-header">
                <div className="browser-controls">
                    <span />
                    <span />
                    <span />
                </div>

                <div className="browser-address">
                    {title}
                </div>
            </div>

            <div className="browser-content">
                {children}
            </div>
        </div>
    );
}