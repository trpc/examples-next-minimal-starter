import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from './AppRouter';

export const trpc = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}