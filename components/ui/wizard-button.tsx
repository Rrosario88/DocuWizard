import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const wizardButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden magic-shimmer transform hover:scale-105",
  {
    variants: {
      variant: {
        default: "wizard-gradient text-primary-foreground shadow-lg hover:shadow-xl wizard-glow",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        parchment: "bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 text-amber-900 shadow-md hover:from-amber-100 hover:to-amber-200 hover:border-amber-300 parchment-texture",
        mystical: "bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white shadow-lg hover:from-purple-700 hover:via-purple-800 hover:to-indigo-800 wizard-glow",
        gold: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 shadow-lg hover:from-yellow-500 hover:to-yellow-700 font-semibold"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface WizardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof wizardButtonVariants> {
  asChild?: boolean
}

const WizardButton = React.forwardRef<HTMLButtonElement, WizardButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(wizardButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {/* Magical shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      </Comp>
    )
  }
)
WizardButton.displayName = "WizardButton"

export { WizardButton, wizardButtonVariants }
