import { IconProps } from './types'
// class="flex items-center w-full h-full justify-center text-white p-1.5 text-body rounded-full"
export default function SuiIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 21 26"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '0.275rem',
        boxSizing: 'border-box',
        borderRadius: '50%',
        backgroundColor: 'rgba(76, 163, 255, 1)'
      }}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.276 10.844a7.75 7.75 0 0 1 1.695 4.848 7.804 7.804 0 0 1-1.743 4.905l-.094.116-.024-.147a7.138 7.138 0 0 0-.075-.377c-.545-2.395-2.322-4.45-5.245-6.112-1.974-1.12-3.104-2.469-3.4-4.001-.193-.99-.05-1.986.225-2.839.276-.852.685-1.566 1.033-1.995L9.785 3.85a.5.5 0 0 1 .772 0l5.72 6.993Zm1.8-1.39L10.452.134a.364.364 0 0 0-.564 0l-7.622 9.32-.025.031A10.102 10.102 0 0 0 0 15.845C0 21.455 4.554 26 10.17 26c5.618 0 10.172-4.546 10.172-10.154 0-2.408-.84-4.62-2.242-6.36l-.025-.032ZM4.09 10.814l.682-.835.02.155c.016.121.036.244.06.367.44 2.315 2.017 4.245 4.651 5.74 2.29 1.303 3.624 2.801 4.008 4.445.16.686.189 1.361.12 1.951l-.004.037-.034.016a7.778 7.778 0 0 1-3.423.789c-4.308 0-7.8-3.487-7.8-7.787 0-1.847.644-3.543 1.72-4.878Z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
