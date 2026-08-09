import React from "react";
import { ArrowRight } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  asChild?: boolean;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    {
      text,
      children,
      className,
      href,
      asChild = false,
      variant = "primary",
      icon,
      ...props
    },
    ref
  ) => {
    const contentText =
      text || (typeof children === "string" ? children : undefined) || "Button";

    const isPrimary = variant === "primary";
    const IconComponent = icon || <ArrowRight className="h-4 w-4 shrink-0" />;

    const innerContent = (
      <>
        {/* Unhovered initial text (slides right & fades out on button hover) */}
        <span className="relative z-10 inline-block translate-x-0 transition-all duration-300 group-hover/ihb:translate-x-12 group-hover/ihb:opacity-0 whitespace-nowrap">
          {contentText}
        </span>

        {/* Hover text & icon (slides into center & fades in on button hover) */}
        <div
          className={cn(
            "absolute top-0 left-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover/ihb:translate-x-0 group-hover/ihb:opacity-100 whitespace-nowrap px-4",
            isPrimary ? "text-white" : "text-black"
          )}
        >
          <span>{contentText}</span>
          {IconComponent}
        </div>

        {/* Expanding circle background dot (hidden when unhovered) */}
        <div
          className={cn(
            "absolute left-[20%] top-[40%] h-2 w-2 scale-0 opacity-0 rounded-full transition-all duration-300 group-hover/ihb:left-0 group-hover/ihb:top-0 group-hover/ihb:h-full group-hover/ihb:w-full group-hover/ihb:scale-[1.8] group-hover/ihb:opacity-100 pointer-events-none z-0",
            isPrimary ? "bg-black" : "bg-white"
          )}
        />
      </>
    );

    const baseClassName = cn(
      "group/ihb relative inline-flex items-center justify-center min-w-32 cursor-pointer overflow-hidden rounded-full px-6 py-2.5 text-center font-semibold transition-all duration-300",
      isPrimary
        ? "bg-white text-black border border-white shadow-sm"
        : "bg-transparent text-ink border border-hairline hover:border-white/40",
      className
    );

    if (href) {
      return (
        <a
          href={href}
          className={baseClassName}
          {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {innerContent}
        </a>
      );
    }

    if (asChild) {
      return (
        <Slot ref={ref} className={baseClassName} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button ref={ref} className={baseClassName} {...props}>
        {innerContent}
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
