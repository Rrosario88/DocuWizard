import { cn } from "@/lib/utils"

interface WizardLogoProps {
  className?: string
  size?: number
  showText?: boolean
}

export function WizardLogo({ className, size = 40, showText = true }: WizardLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Wizard Hat & Staff Icon */}
      <div className="relative">
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="wizard-float"
        >
          {/* Wizard Hat */}
          <path
            d="M50 10 L30 60 L70 60 Z"
            fill="url(#wizardHatGradient)"
            stroke="currentColor"
            strokeWidth="2"
          />
          
          {/* Hat Brim */}
          <ellipse
            cx="50"
            cy="60"
            rx="22"
            ry="4"
            fill="url(#wizardHatGradient)"
            stroke="currentColor"
            strokeWidth="2"
          />
          
          {/* Stars on Hat */}
          <g fill="var(--wizard-gold)" className="spell-animation">
            <path d="M45 25 L46 28 L49 28 L47 30 L48 33 L45 31 L42 33 L43 30 L41 28 L44 28 Z" />
            <path d="M55 35 L56 37 L58 37 L57 38 L58 40 L55 39 L53 40 L54 38 L52 37 L54 37 Z" />
          </g>
          
          {/* Crescent Moon */}
          <path
            d="M52 20 C54 18 56 20 55 23 C54 25 52 24 52 20 Z"
            fill="var(--wizard-gold)"
            className="spell-animation"
          />
          
          {/* Magic Staff */}
          <line
            x1="75"
            y1="20"
            x2="85"
            y2="80"
            stroke="url(#staffGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          
          {/* Crystal Orb */}
          <circle
            cx="77"
            cy="25"
            r="6"
            fill="url(#orbGradient)"
            stroke="var(--wizard-gold)"
            strokeWidth="1.5"
            className="wizard-glow"
          />
          
          {/* Sparkles around orb */}
          <g fill="var(--wizard-gold)" className="spell-animation">
            <circle cx="70" cy="18" r="1" />
            <circle cx="84" cy="22" r="1" />
            <circle cx="82" cy="32" r="1" />
            <circle cx="72" cy="30" r="1" />
          </g>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="wizardHatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--wizard-primary)" />
              <stop offset="100%" stopColor="var(--wizard-primary-dark)" />
            </linearGradient>
            
            <linearGradient id="staffGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>
            
            <radialGradient id="orbGradient" cx="30%" cy="30%">
              <stop offset="0%" stopColor="var(--wizard-primary-light)" />
              <stop offset="70%" stopColor="var(--wizard-primary)" />
              <stop offset="100%" stopColor="var(--wizard-primary-dark)" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      
      {/* DocuWizard Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="wizard-title text-2xl font-bold leading-none">
            DocuWizard
          </span>
          <span className="text-xs text-muted-foreground wizard-body">
            Document Sage
          </span>
        </div>
      )}
    </div>
  )
}

// Simplified icon version for smaller spaces
export function WizardIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
    >
      {/* Simplified Wizard Hat */}
      <path
        d="M50 15 L35 65 L65 65 Z"
        fill="currentColor"
        opacity="0.9"
      />
      
      {/* Hat Brim */}
      <ellipse
        cx="50"
        cy="65"
        rx="18"
        ry="3"
        fill="currentColor"
      />
      
      {/* Single Star */}
      <path
        d="M50 30 L51 33 L54 33 L52 35 L53 38 L50 36 L47 38 L48 35 L46 33 L49 33 Z"
        fill="var(--wizard-gold)"
      />
    </svg>
  )
}
