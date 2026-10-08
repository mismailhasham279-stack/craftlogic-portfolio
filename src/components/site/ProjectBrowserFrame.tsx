import { ProjectImage } from "./ProjectImage";

type Props = {
  src: string | null;
  projectName: string;
  className?: string;
};

export function ProjectBrowserFrame({ src, projectName, className = "" }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-primary/25 bg-[#0c0c0c] shadow-[0_18px_50px_-32px_rgba(0,0,0,0.9)] transition-[border-color,box-shadow] duration-300 group-hover:border-primary/55 group-hover:shadow-[0_22px_56px_-34px_rgba(229,195,120,0.25)] ${className}`}
    >
      <div className="flex h-8 items-center gap-1.5 border-b border-primary/15 bg-[#141414] px-3 sm:h-9">
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="ml-2 truncate font-mono text-[8px] tracking-[0.08em] text-muted-foreground/80 sm:text-[9px]">
          {projectName}
        </span>
      </div>
      <div className="aspect-[16/10] overflow-hidden bg-[#10100f]">
        <ProjectImage
          src={src}
          alt={`${projectName} website screenshot`}
          name={projectName}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}
