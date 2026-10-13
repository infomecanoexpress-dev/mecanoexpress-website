// Icônes dessinées au trait (1,5 px, mêmes proportions) à la place des emojis.

const trait = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24', 'aria-hidden': 'true' }

export function PhoneIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function CalendarIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

export function ArrowIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait} strokeWidth={1.75}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

export function MailIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function PinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M12 21s-6.5-5.5-6.5-11a6.5 6.5 0 0 1 13 0c0 5.5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function TireIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  )
}

export function DropIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
    </svg>
  )
}

export function WrenchIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

export function CarIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14" />
      <circle cx="7.5" cy="16" r="1.5" />
      <circle cx="16.5" cy="16" r="1.5" />
    </svg>
  )
}

export function TruckIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M2 6h11v10H2zM13 9h4l4 4v3h-8" />
      <circle cx="6" cy="17.5" r="1.75" />
      <circle cx="17" cy="17.5" r="1.75" />
    </svg>
  )
}

export function BalanceIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z" />
    </svg>
  )
}

export function RotateIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" />
    </svg>
  )
}

export function ClockIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function GaugeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M4.5 17a8.5 8.5 0 1 1 15 0" />
      <path d="M12 13l4-4M12 13h.01" />
    </svg>
  )
}

export function ShieldIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function CheckIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

export function ExternalIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

// Étoile pleine (note des avis) : forme pleine, pas un glyphe ★.
export function StarIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" />
    </svg>
  )
}

export function MenuIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} {...trait}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}
