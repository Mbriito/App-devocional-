/**
 * Security and Cryptography Utilities
 * Uses the browser native Web Crypto API (SHA-256) for password verification
 * ensuring plaintext passwords are never stored in the compiled bundle.
 */

// SHA-256 Hashes of authorized master passwords
// Generated from: 'PLENA2026', 'MULHERPLENA', 'PLENA'
export const AUTHORIZED_HASHES = new Set([
  'a108ff199f9d08143f574997eb8d24c14d0d1e2dfda43bff8ea860c33f16960a', // PLENA2026
  '143a0ead01a9cecc85a4ea83a564c62111a4a4adae9962e28c57ef0de294dbd6', // MULHERPLENA
  '4e56b985dd516587ddfda91685d27f02b3aba79ac629f2cf5c10000673c8448d', // PLENA
]);

/**
 * Computes a SHA-256 hex string from any input string using native Web Crypto API
 */
export async function sha256(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Validates a password attempt against stored cryptographic hashes
 */
export async function verifyPassword(candidate: string): Promise<boolean> {
  if (!candidate || candidate.trim().length === 0) return false;
  
  const normalized = candidate.trim().toUpperCase();
  const candidateHash = await sha256(normalized);

  // Check custom hash if defined by creator in localStorage
  try {
    const customHash = localStorage.getItem('mulher_custom_hash');
    if (customHash && customHash === candidateHash) {
      return true;
    }
  } catch {}

  return AUTHORIZED_HASHES.has(candidateHash);
}
