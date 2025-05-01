
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface UploadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: boolean;
}

const UploadButton = React.forwardRef<HTMLButtonElement, UploadButtonProps>(
  ({ className, variant = "default", size = "default", icon = true, asChild = false, loading, disabled, ...props }, ref) => {
    return (
      <Button
        className={cn("relative", className)}
        variant={variant}
        size={size}
        ref={ref}
        disabled={loading || disabled}
        {...props}
      >
        {icon && <Upload className={cn("h-4 w-4 mr-2", !props.children && "mr-0")} />}
        {props.children}
      </Button>
    );
  }
);
UploadButton.displayName = "UploadButton";

export { UploadButton };
