import logoAsset from "@/assets/logo.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * The CRAFTLOGIC brand mark. The source artwork is a square logo on a white
 * field, so it is masked into a soft rounded plate to sit on the dark UI.
 */
export function Logo({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <span
      className={cn(
        "inline-grid shrink-0 place-items-center overflow-hidden rounded-[0.7rem] bg-white",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <img
        src={logoAsset.url}
        alt="CRAFTLOGIC — Full-Stack Web Development Agency"
        width={size}
        height={size}
        className="h-full w-full object-contain p-[3px]"
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
