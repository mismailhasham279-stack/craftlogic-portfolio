import { cn } from "@/lib/utils";

type Props = {
  desktopSrc: string;
  mobileSrc: string;
  name: string;
  className?: string;
  eager?: boolean;
};

/** Browser frame with an overlapping phone, both filled with real screenshots. */
export function DeviceShowcase({ desktopSrc, mobileSrc, name, className, eager }: Props) {
  const loading = eager ? "eager" : "lazy";
  return (
    <div className={cn("relative", className)}>
      <div className="hairline relative overflow-hidden rounded-xl bg-surface/80 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/15" />
          <span className="ml-3 truncate rounded-full bg-background/70 px-3 py-1 font-mono text-[10px] text-muted-foreground">
            {name}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-background">
          <img
            key={desktopSrc}
            src={desktopSrc}
            alt={`${name} — desktop view`}
            loading={loading}
            decoding="async"
            className="animate-fade-in h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <div
        className="hairline absolute -bottom-12 -left-8 hidden w-[118px] overflow-hidden rounded-[1.3rem] bg-surface-2 p-1.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:block md:-left-16 md:w-[136px]"
        aria-hidden={false}
      >
        <div className="overflow-hidden rounded-[1rem] bg-background">
          <img
            key={mobileSrc}
            src={mobileSrc}
            alt={`${name} — mobile view`}
            loading={loading}
            decoding="async"
            className="animate-fade-in aspect-[9/17] w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
