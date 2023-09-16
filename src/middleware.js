import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;
    const token = request.cookies.get("token")?.value || '';
    const isAuthPath = path === '/login' || path === '/registration';
    const isProtectedPath = path === '/' || path === '/dashboard';

    if (token) {
        if (isAuthPath) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    } else {
        if (isProtectedPath)  {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/dashboard', '/login', '/registration']
}