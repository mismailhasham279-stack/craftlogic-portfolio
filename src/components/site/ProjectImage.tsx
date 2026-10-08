import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string | null;
  alt: string;
  name: string;
  className?: string;
  fit?: "cover" | "contain";
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

export function ProjectImage({
  src,
  alt,
  name,
  className,
  fit = "cover",
  loading = "lazy",
  fetchPriority = "auto",
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,rgba(194,157,94,0.12),transparent_55%),linear-gradient(145deg,#191713,#0c0c0c_72%)]",
        className,
      )}
    >
      {!loaded || failed ? (
        <div
          role="img"
          aria-label={`${name} project preview`}
          className="absolute inset-0 grid place-items-center p-5 text-center"
        >
          <div className="max-w-full">
            <span className="font-display text-base font-medium tracking-wide text-foreground/85 sm:text-lg">
              {name}
            </span>
          </div>
        </div>
      ) : null}
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-300",
            fit === "contain" ? "object-contain" : "object-cover object-top",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
      ) : null}
    </div>
  );
}
