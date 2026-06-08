/**
 * Validates an email address using simple, linear string checks.
 *
 * This intentionally avoids a multi-quantifier regular expression so it cannot
 * be exploited for super-linear backtracking (ReDoS); every check below runs in
 * linear time relative to the input length.
 */
export function isValidEmail(email: string): boolean {
  if (typeof email !== 'string' || email.length === 0 || email.length > 254) {
    return false
  }

  // No whitespace allowed anywhere in an address.
  if (/\s/.test(email)) {
    return false
  }

  const atIndex = email.indexOf('@')
  // Require exactly one "@", and at least one character before it.
  if (atIndex <= 0 || atIndex !== email.lastIndexOf('@')) {
    return false
  }

  const domain = email.slice(atIndex + 1)
  const dotIndex = domain.indexOf('.')

  // The domain must contain a dot that is neither the first nor last character.
  return dotIndex > 0 && dotIndex < domain.length - 1
}
