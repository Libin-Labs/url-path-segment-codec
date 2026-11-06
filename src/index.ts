export function encodePathSegment(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return encodeURIComponent(value);
}
export function decodePathSegment(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected encoded text');
  try {
    return decodeURIComponent(value);
  } catch (error) {
    if (error instanceof URIError) throw new RangeError('Malformed percent encoding');
    throw error;
  }
}
