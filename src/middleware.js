import { NextResponse } from 'next/server'
import { isAuth } from './utils/auth'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // console.log(request.cookies.get("token"));
}