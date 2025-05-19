export default function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="60" cy="60" r="55"
        fill="#1E1E1E"
        stroke="#F5DEB3" strokeWidth="4"
      />
      <g transform="translate(60,60)">
        {Array.from({ length: 6 }, (_, i) => (
          <path
            key={i}
            d="M0,-50 L30,-25 L0,0 Z"
            fill="#F5DEB3"
            transform={`rotate(${i * 60})`}
          />
        ))}
      </g>
    </svg>
  )
}