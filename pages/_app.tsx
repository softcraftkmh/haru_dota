import Layout from 'components/layout/index';
import { AppProps } from 'next/app';
import React from 'react';
import { SWRConfig } from 'swr';

import fetcher from '../utils/fetcher';

import 'styles/index.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<SWRConfig
			value={{
				fetcher,
				revalidateOnMount: true,
				shouldRetryOnError: false,
			}}
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SWRConfig>
	);
};

export default MyApp;
