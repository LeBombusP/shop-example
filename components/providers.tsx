'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useQueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

export function Providers({ children }: ThemeProviderProps) {
	const queryClient = useQueryClient();
	return (
		<NextThemesProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
			<QueryClientProvider client={queryClient}>
				{children}
				<Toaster />
				{(process.env.ENV === 'dev') ? <ReactQueryDevtools initialIsOpen={false} /> : <></>}
			</QueryClientProvider>
		</NextThemesProvider>
	);
}
