import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spellCardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-border hover:shadow-md",
        parchment: "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 shadow-md hover:shadow-lg parchment-texture",
        mystical: "bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-md hover:shadow-lg wizard-glow",
        dark: "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 text-slate-100 shadow-lg hover:shadow-xl",
        floating: "hover:scale-105 hover:-translate-y-1 wizard-float"
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface SpellCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spellCardVariants> {}

const SpellCard = React.forwardRef<HTMLDivElement, SpellCardProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(spellCardVariants({ variant, size, className }))}
      {...props}
    />
  )
)
SpellCard.displayName = "SpellCard"

const SpellCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
))
SpellCardHeader.displayName = "SpellCardHeader"

const SpellCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("wizard-heading text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
SpellCardTitle.displayName = "SpellCardTitle"

const SpellCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("wizard-body text-sm text-muted-foreground", className)}
    {...props}
  />
))
SpellCardDescription.displayName = "SpellCardDescription"

const SpellCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn("wizard-body", className)} 
    {...props} 
  />
))
SpellCardContent.displayName = "SpellCardContent"

const SpellCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
))
SpellCardFooter.displayName = "SpellCardFooter"

// Special medieval-themed card variants
const GrimoireCard = React.forwardRef<HTMLDivElement, SpellCardProps>(
  ({ className, children, ...props }, ref) => (
    <SpellCard
      ref={ref}
      variant="parchment"
      className={cn("relative border-2 border-amber-300", className)}
      {...props}
    >
      {/* Decorative corners */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-400 opacity-60" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-60" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-60" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-400 opacity-60" />
      {children}
    </SpellCard>
  )
)
GrimoireCard.displayName = "GrimoireCard"

const MysticalCard = React.forwardRef<HTMLDivElement, SpellCardProps>(
  ({ className, children, ...props }, ref) => (
    <SpellCard
      ref={ref}
      variant="mystical"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {/* Magical sparkle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-indigo-100/20 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </SpellCard>
  )
)
MysticalCard.displayName = "MysticalCard"

export {
  SpellCard,
  SpellCardHeader,
  SpellCardFooter,
  SpellCardTitle,
  SpellCardDescription,
  SpellCardContent,
  GrimoireCard,
  MysticalCard,
  spellCardVariants
}
