function Icon({ size = 24, strokeWidth = 2, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function HomeIcon({ size = 17 }) {
  return (
    <Icon size={size} fill="currentColor" stroke="none">
      <path d="M3 11.2 12 3l9 8.2v9.3a.5.5 0 0 1-.5.5h-5.3v-6.2H8.8V21H3.5a.5.5 0 0 1-.5-.5v-9.3Z" />
    </Icon>
  );
}

export function InfoIcon({ size = 17 }) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6" />
      <circle cx="12" cy="7" r=".7" fill="currentColor" />
    </Icon>
  );
}

export function BookIcon({ size = 18 }) {
  return (
    <Icon size={size} strokeWidth={1.8}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M8 7h8M8 10h6" />
    </Icon>
  );
}

export function CheckIcon({ size = 17 }) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </Icon>
  );
}

export function DocumentIcon({ size = 24 }) {
  return (
    <Icon size={size}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h6" />
    </Icon>
  );
}

export function SettingsIcon({ size = 24 }) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.4 1.4-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-2v-.5a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.4-1.4.06-.06A1.7 1.7 0 0 0 9.4 15a1.7 1.7 0 0 0-1.56-1.03H7v-2h.84A1.7 1.7 0 0 0 9.4 10a1.7 1.7 0 0 0-.34-1.88L9 8.06l1.4-1.4.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 13.37 5.5V5h2v.5a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.4 1.4-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.56 1.03H21v2h-.04A1.7 1.7 0 0 0 19.4 15Z" />
    </Icon>
  );
}

export function ShieldIcon({ size = 24 }) {
  return (
    <Icon size={size}>
      <path d="M12 3 20 6v5c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  );
}

export function KeyIcon({ size = 18 }) {
  return (
    <Icon size={size}>
      <circle cx="7.5" cy="15.5" r="3.5" />
      <path d="m10 13 9-9" />
      <path d="m15 6 3 3" />
      <path d="m17 4 3 3" />
    </Icon>
  );
}

export function LockIcon({ size = 18 }) {
  return (
    <Icon size={size}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </Icon>
  );
}

export function SearchIcon({ size = 20 }) {
  return (
    <Icon size={size}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </Icon>
  );
}
