export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  return <button>{children}</button>
}
