// lib/consent.ts
export type Consent = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp: number
}

const KEY = 'sp_consent'
const EVENT = 'sp_consent_changed'

export function readConsent(): Consent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (
      typeof parsed === 'object' &&
      typeof parsed.necessary === 'boolean' &&
      typeof parsed.analytics === 'boolean' &&
      typeof parsed.marketing === 'boolean' &&
      typeof parsed.timestamp === 'number'
    ) {
      return parsed as Consent
    }
    return null
  } catch {
    localStorage.removeItem(KEY)
    return null
  }
}

export function saveConsent(c: Omit<Consent, 'timestamp'>) {
  if (typeof window === 'undefined') return
  const payload: Consent = { ...c, timestamp: Date.now() }
  localStorage.setItem(KEY, JSON.stringify(payload))
  window.dispatchEvent(new Event(EVENT))
}

export function hasConsent(scope: keyof Omit<Consent, 'timestamp'>): boolean {
  const c = readConsent()
  return !!c && !!c[scope]
}

export function clearConsent() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(KEY)
  window.dispatchEvent(new Event(EVENT))
}

export function getConsentSnapshot(): Consent | null {
  return typeof window === 'undefined' ? null : readConsent()
}

export function onConsentChange(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {}
  window.addEventListener(EVENT, callback)
  return () => window.removeEventListener(EVENT, callback)
}