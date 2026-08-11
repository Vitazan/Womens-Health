"use client";

import Link from "next/link";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { event } from "@/lib/data";

type RegisterButtonProps = {
  label?: string;
  className?: string;
  size?: ButtonProps["size"];
  /** Render the "Registration opening soon" helper text while the link is pending. */
  showNote?: boolean;
  noteClassName?: string;
  wrapperClassName?: string;
};

/**
 * Single source of truth for every Register CTA on the site.
 *
 * While `event.registrationLink` is null the button renders greyed out and
 * non-interactive, so a dead or stale link can never ship. Setting the link in
 * lib/data.ts turns every instance live at once.
 */
const RegisterButton = ({
  label = "Register Now",
  className,
  size,
  showNote = false,
  noteClassName,
  wrapperClassName,
}: RegisterButtonProps) => {
  const link = event.registrationLink;

  if (!link) {
    return (
      <div className={cn("inline-flex flex-col items-center", wrapperClassName)}>
        <Button
          disabled
          size={size}
          aria-disabled="true"
          className={cn(
            "bg-gray-300 text-gray-600 hover:bg-gray-300",
            className
          )}
        >
          {label}
        </Button>
        {showNote && (
          <p className={cn("mt-2 text-sm text-gray-500", noteClassName)}>
            Registration opening soon
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={cn("inline-flex flex-col items-center", wrapperClassName)}>
      <Button
        asChild
        size={size}
        style={{ backgroundColor: "#cfb2f3" }}
        className={cn("text-black hover:opacity-90", className)}
      >
        <Link href={link} target="_blank" rel="noopener noreferrer">
          {label}
        </Link>
      </Button>
    </div>
  );
};

export default RegisterButton;
