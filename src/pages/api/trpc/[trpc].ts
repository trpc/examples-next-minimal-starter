import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../utils/trpc/AppRouter';

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
