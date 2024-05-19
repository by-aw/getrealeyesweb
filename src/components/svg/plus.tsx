export default function Plus() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
    >
      <g filter="url(#filter0_d_1037_549)">
        <path
          d="M13.446 20H11.9989V12.7269H4V11.2798H11.9989V4H13.446V11.2798H21.4538V12.7269H13.446V20Z"
          fill="black"
        />
        <path
          d="M13.446 20H11.9989V12.7269H4V11.2798H11.9989V4H13.446V11.2798H21.4538V12.7269H13.446V20Z"
          fill="url(#paint0_diamond_1037_549)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1037_549"
          x="0"
          y="0"
          width="25.4531"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1037_549"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1037_549"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_diamond_1037_549"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.7269 12) rotate(90) scale(8 8.72692)"
        >
          <stop stop-color="#00F0FF" />
          <stop offset="1" stop-color="#0085FF" />
        </radialGradient>
      </defs>
    </svg>
  );
}
