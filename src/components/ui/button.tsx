import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 comic-border rounded-none transform hover:scale-95 active:scale-90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 comic-border rounded-none",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground comic-border rounded-none",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 comic-border rounded-none",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Pop Art specific variants
        explosion: "explosion-bg text-pop-black font-handwrite rounded-none transform hover:scale-105 hover:rotate-1 transition-all duration-200 border-4 border-pop-black text-lg font-bold",
        comic: "bg-pop-blue text-pop-white font-comic rounded-none comic-border transform hover:scale-95 active:scale-90 text-lg tracking-wider",
        grab: "bg-pop-pink text-pop-white font-handwrite rounded-none transform rotate-1 hover:rotate-0 hover:scale-105 border-4 border-pop-black text-lg pop-bounce"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xl: "h-14 px-8 py-4 text-xl",
        explosion: "h-16 w-32 text-xl"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }