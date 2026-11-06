import * as api from '@lp-labs/url-path-segment-codec';
import { encodePathSegment, decodePathSegment } from '@lp-labs/url-path-segment-codec';
console.log(decodePathSegment(encodePathSegment('a/b')));
// @ts-expect-error invalid argument must be rejected by declarations
api.encodePathSegment(3);
