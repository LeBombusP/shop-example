'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useQueryClient, QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { isDev } from '@/lib/utils';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
	// const queryClient = useQueryClient(); should work but doesn't ¯\_(ツ)_/¯
	const [queryClient] = React.useState(() => new QueryClient())
	return (
		<NextThemesProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
			<QueryClientProvider client={queryClient}>
				{children}
				<Toaster />
				{isDev && <ReactQueryDevtools initialIsOpen={false} />}
			</QueryClientProvider>
		</NextThemesProvider>
	);
}
