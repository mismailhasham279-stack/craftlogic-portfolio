import { cn } from "@/lib/utils";
import { ProjectImage } from "./ProjectImage";

type Props = {
  desktopSrc: string | null;
  mobileSrc: string | null;
  name: string;
  className?: string;
  eager?: boolean;
};

/** Browser frame with an overlapping phone, filled with local project previews. */
export function DeviceShowcase({ desktopSrc, mobileSrc, name, className, eager }: Props) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative overflow-hidden rounded-xl border border-[#2a2418] bg-[#0c0c0c] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-[#2a2418] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/15" />
          <span className="ml-3 truncate rounded-full bg-[#11100e] px-3 py-1 font-mono text-[10px] text-muted-foreground">
            {name}
          </span>
        </div>
        <ProjectImage
          src={desktopSrc}
          alt={`${name} — desktop view`}
          name={name}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="aspect-[16/10]"
        />
      </div>

      <div
        className="absolute -bottom-12 -left-8 hidden w-[118px] overflow-hidden rounded-[1.3rem] border border-[#2a2418] bg-[#0c0c0c] p-1.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:block md:-left-16 md:w-[136px]"
        aria-hidden={false}
      >
        <ProjectImage
          src={mobileSrc}
          alt={`${name} — mobile view`}
          name={name}
          className="aspect-[9/17] rounded-[1rem]"
        />
      </div>
    </div>
  );
}
