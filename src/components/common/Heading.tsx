interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

export default function Heading({
    title,
    subtitle,
    center = false,
}: HeadingProps) {
    return (
        <div
            className={center ? "text-center" : ""}
            style={{ marginBottom: "3rem" }}
        >
            <h2>{title}</h2>

            {subtitle && (
                <p
                    style={{
                        maxWidth: "650px",
                        margin: center
                            ? "1rem auto 0"
                            : "1rem 0 0",
                    }}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}