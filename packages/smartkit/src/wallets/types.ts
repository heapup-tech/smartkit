export type Wallet = {
  id: string
  name: string
  iconUrl: string | (() => Promise<string>)
  installed?: boolean
  downloadUrl?: string
}
