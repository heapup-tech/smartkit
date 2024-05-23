import { IconProps } from './types'

export default function CheckedIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z"
      />
    </svg>
  )
}
