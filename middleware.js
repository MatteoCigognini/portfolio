import { NextResponse } from "next/server";

let locales = ['en', 'it']

// Restituisce la lingua
function getLocale(request) {
    const acceptLanguage = request.headers.get('accept-language');
    const supportedLocales = ['en', 'it'];

    // Trova la lingua preferita che corrisponde a uno dei locali supportati
    const locale = acceptLanguage
        ? acceptLanguage
            .split(',')
            .map((lang) => lang.split(';')[0])
            .find((lang) => supportedLocales.includes(lang))
        : 'it'; // Default locale

    return locale;
}

export function middleware(request) {
    // Controlla se c'è qualche lingua supportata
    const { pathname } = request.nextUrl

    // Escludi richieste per risorse statiche e percorsi specifici
    if (
        pathname.startsWith('/_next') || // Risorse di Next.js
        pathname.startsWith('/api/') || // API routes
        pathname.startsWith('/sitemap.xml') || // Sitemap index
        pathname.startsWith('/favicon.ico') || // Favicon
        /\.(.*)$/.test(pathname) // File statici (es: .png, .jpg, .css, .js, ecc.)
    ) {
        return NextResponse.next();
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Reinderizza se non c'è nessuna locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}