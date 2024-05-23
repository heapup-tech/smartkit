import { IconProps } from './types'

export default function ArrowDown(props: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 1L5.5 5L9.5 1"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  )
}
