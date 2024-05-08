'use client'
import {ThemeProvider} from 'next-themes';

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme='system'>
        <div className="">
            {children}
        </div>
    </ThemeProvider>
  )
}