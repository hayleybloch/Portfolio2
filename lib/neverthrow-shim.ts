import { ok, err } from 'neverthrow';
export { Result } from 'neverthrow';
export type { Ok, Err } from 'neverthrow';

// Provide function-callable aliases matching existing code usage
export const Ok = ok;
export const Err = err;
