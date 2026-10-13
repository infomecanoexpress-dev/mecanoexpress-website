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
