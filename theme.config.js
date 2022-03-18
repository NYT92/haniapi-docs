export default {
  github: 'https://github.com/NYT92/haniapi-docs',
  docsRepositoryBase: 'https://github.com/NYT92/haniapi-docs/blob/master',
  titleSuffix: ' – HaniAPI Docs',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Hanime API</span>
      <span className="text-gray-600 font-normal hidden md:inline">
      Unofficial API Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Hanime API : Unofficial API Documentation" />
      <meta name="og:description" content="Hanime API : Unofficial API Documentation" />
      <meta name="og:title" content="Hanime API : Unofficial API"/>
      <meta name="og:image" content="/fav.png" />
      <link rel="icon" type="image/png" sizes="360x360" href="/fav.png"/>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © NYT92 / nsDev</>,
  unstable_faviconGlyph: '👋',
}
