import { cn } from "@/lib/utils"

interface IconProps {
  className?: string
  size?: number
}

// Magic Staff Icon
export function MagicStaff({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
    >
      <line x1="4" y1="20" x2="20" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="6" r="3" fill="var(--wizard-primary)" stroke="var(--wizard-gold)" strokeWidth="1" />
      <g fill="var(--wizard-gold)" opacity="0.7">
        <circle cx="15" cy="3" r="0.5" />
        <circle cx="21" cy="5" r="0.5" />
        <circle cx="20" cy="9" r="0.5" />
      </g>
    </svg>
  )
}

// Spell Book Icon
export function SpellBook({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
    >
      <path
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
        fill="var(--wizard-primary)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 7h8M8 11h6M8 15h4"
        stroke="var(--wizard-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Crystal Ball Icon
export function CrystalBall({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="url(#crystalGradient)"
        stroke="var(--wizard-gold)"
        strokeWidth="2"
      />
      <ellipse
        cx="10"
        cy="8"
        rx="2"
        ry="3"
        fill="white"
        opacity="0.3"
      />
      <path
        d="M6 20h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <radialGradient id="crystalGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="var(--wizard-primary-light)" />
          <stop offset="70%" stopColor="var(--wizard-primary)" />
          <stop offset="100%" stopColor="var(--wizard-primary-dark)" />
        </radialGradient>
      </defs>
    </svg>
  )
}

// Scroll Icon
export function Scroll({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
    >
      <path
        d="M8 2v20l2-2 2 2V2"
        fill="var(--wizard-parchment)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 7h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 17h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Potion Bottle Icon
export function PotionBottle({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
    >
      <path
        d="M9 2h6v4l3 3v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9l3-3V2z"
        fill="var(--wizard-primary)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 2h6"
        stroke="var(--wizard-gold)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="15"
        r="2"
        fill="var(--wizard-gold)"
        opacity="0.7"
      />
    </svg>
  )
}

// Rune Symbol Icon
export function RuneSymbol({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
    >
      <path
        d="M12 2L22 12L12 22L2 12L12 2Z"
        fill="var(--wizard-primary)"
        stroke="var(--wizard-gold)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 8L16 16M16 8L8 16"
        stroke="var(--wizard-gold)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        fill="var(--wizard-gold)"
      />
    </svg>
  )
}

// Sparkles Icon
export function Sparkles({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current spell-animation", className)}
    >
      <path
        d="M12 2L13 8L19 9L13 10L12 16L11 10L5 9L11 8L12 2Z"
        fill="var(--wizard-gold)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M19 4L19.5 6L21.5 6.5L19.5 7L19 9L18.5 7L16.5 6.5L18.5 6L19 4Z"
        fill="var(--wizard-primary)"
      />
      <path
        d="M5 15L5.5 17L7.5 17.5L5.5 18L5 20L4.5 18L2.5 17.5L4.5 17L5 15Z"
        fill="var(--wizard-primary)"
      />
    </svg>
  )
}

// Wizard Hat Simple Icon
export function WizardHat({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-current", className)}
    >
      <path
        d="M12 2L6 18H18L12 2Z"
        fill="var(--wizard-primary)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse
        cx="12"
        cy="18"
        rx="7"
        ry="2"
        fill="var(--wizard-primary)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 8L11 10L13 10L12 11L13 13L10 12L8 13L9 11L7 10L9 10L10 8Z"
        fill="var(--wizard-gold)"
      />
    </svg>
  )
}
