import { NextRequest, NextResponse } from 'next/server';



export const config = { matcher: '/((?!.*\\.).*)' };

const middleware = async (req: NextRequest) => {
  const cookie: any = req.cookies.get('user');
  if (!cookie && req.nextUrl.pathname !== '/login') {
    const redirectUrl = new URL('/login', req.nextUrl.origin).toString();
    return NextResponse.redirect(redirectUrl);
  }
};

export default middleware;
