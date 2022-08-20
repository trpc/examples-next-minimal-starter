import { withTRPC } from '@trpc/next';
import { AppType } from 'next/dist/shared/lib/utils';
import { AppRouter } from '../utils/trpc/AppRouter';

const MyApp: AppType = ({ Component, pageProps }) => 
  <Component {...pageProps} />;

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = 'http://localhost:3000/api/trpc';
    return {
      url,
    };
  },
})(MyApp);
