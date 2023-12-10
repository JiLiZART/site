<script>
    import Logo from '../components/Logo.svelte'
    import Link from '../components/PageLink.svelte'
    import Footer from '../components/Footer.svelte'
    import links from '../data/links';

    const DARK_CLASS = 'dark-mode'
    const LIGHT_CLASS = 'light-mode'

    const preferScheme = '🌗'
    const darkScheme = '🌑'
    const lightScheme = '🌕'

    let isDark = false

    let themeTitles = {
        'auto': 'Prefer System Theme',
        'dark': 'Dark Theme',
        'light': 'Light Theme'
    }
    let theme = 'auto'
    let themeTitle = themeTitles[theme]

    let themeText = preferScheme

    function onDarkTheme() {
        isDark = window.matchMedia("(prefers-color-scheme: dark)").matches

        let themeModes = {
            'auto': isDark ? 'light' : 'dark',
            'dark': 'light',
            'light': 'auto'
        }

        const bodyClass =  window.document.body.classList

        theme = themeModes[theme]

        if (theme === 'auto') {
            bodyClass.remove(DARK_CLASS)
            bodyClass.remove(LIGHT_CLASS)

            themeText = preferScheme
            themeTitle = themeTitles[theme]
        }

        if (theme === 'light') {
            bodyClass.add(LIGHT_CLASS)
            bodyClass.remove(DARK_CLASS)

            themeText = lightScheme
            themeTitle = themeTitles[theme]
        }

        if (theme === 'dark') {
            bodyClass.add(DARK_CLASS)
            bodyClass.remove(LIGHT_CLASS)

            themeText = darkScheme
            themeTitle = themeTitles[theme]
        }
    }
</script>

<svelte:head>
    <html lang="en-US" class="dark" />
    <link rel="dns-prefetch" href="//google-analytics.com">
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WCBMSF');</script>
    <!-- End Google Tag Manager -->

    <title>Николай Костюрин — JavaScript Developer - https://artkost.ru/</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta name="subject" content="Николай Костюрин — Fullstack Web Developer">
    <meta data-hid="description" name="description" content="Николай Костюрин — Fullstack Web Developer">
    <meta data-hid="charset" charset="utf-8">
    <meta data-hid="mobile-web-app-capable" name="mobile-web-app-capable" content="yes">
    <meta data-hid="apple-mobile-web-app-title" name="apple-mobile-web-app-title" content="Николай Костюрин — JavaScript Разработчк">
    <meta data-hid="og:type" name="og:type" property="og:type" content="website">
    <meta data-hid="og:title" name="og:title" property="og:title" content="Николай Костюрин — JavaScript Разработчк">
    <meta data-hid="og:site_name" name="og:site_name" property="og:site_name" content="Николай Костюрин — JavaScript Разработчк">
    <link rel="dns-prefetch" href="//google-analytics.com">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="manifest" href="/manifest.json">
    <link rel="me" href="mailto:nikolay@artkost.ru">
    <link rel="shortcut icon" href="/favicon-96x96.png">
    <link rel="manifest" href="/manifest.json" data-hid="manifest">
</svelte:head>

<div class="page" itemref="data-author" itemscope itemtype="http://schema.org/WebSite">
    <header class="header" aria-hidden="true">
        <Link href="/"><Logo /></Link>
        <button type="button" on:click={onDarkTheme} title={themeTitle}>{themeText}</button>
    </header>
    <slot></slot>
    <Footer links={links} />
</div>

<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCBMSF"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
<img src="/stat.gif" alt="Stats pixel" layout="fixed" height="1px" width="1px" />
<img src="https://mc.yandex.ru/watch/860366" style="position:absolute; left:-9999px;" alt="" />

<style>
    :global(body.light-mode) {
        --outline-width: calc(1rem / 16 * 3);
        --focus-color: rgba(0, 74, 148, 0.4);
        --bg-color: #f6f1f9;
        --text-color: #333;
        --text-gray-color: #666;
        --page-font: Rubik, NotoSans, Roboto, Helvetica, Arial, serif;
        --bullet-color: black;
        --link-color: #004a94;
        --link-active-color: #00254a;
        --link-visited-color: rgba(0, 74, 148, 0.2);
        --link-hover-color:  #d7370f;
        --link-hover-border: rgba(215, 55, 15, 0.2);
        --snackbar-bg: #fff;
        --snackbar-color: #363636;
    }

    :global(body.dark-mode) {
        --focus-color: rgba(0, 74, 148, 0.4);
        --bg-color: #0f172a;
        --text-color: #e4e4e7;
        --text-gray-color: #a1a1aa;
        --page-font: Rubik, NotoSans, Roboto, Helvetica, Arial, serif;
        --bullet-color: white;
        --link-color: #c084fc;
        --link-active-color: #1d4ed8;
        --link-visited-color: #1e3a8a;
        --link-hover-color:  #4f46e5;
        --link-hover-border: #4338ca;
        --snackbar-bg: #18181b;
        --snackbar-color: #e4e4e7;
    }

    @media (prefers-color-scheme: dark) {
        :global(body) {
            --focus-color: rgba(0, 74, 148, 0.4);
            --bg-color: #0f172a;
            --text-color: #e4e4e7;
            --text-gray-color: #a1a1aa;
            --page-font: Rubik, NotoSans, Roboto, Helvetica, Arial, serif;
            --bullet-color: white;
            --link-color: #c084fc;
            --link-active-color: #1d4ed8;
            --link-visited-color: #1e3a8a;
            --link-hover-color:  #4f46e5;
            --link-hover-border: #4338ca;
            --snackbar-bg: #18181b;
            --snackbar-color: #e4e4e7;
        }
    }

    @media (prefers-color-scheme: light) {
        :global(body) {
            --outline-width: calc(1rem / 16 * 3);
            --focus-color: rgba(0, 74, 148, 0.4);
            --bg-color: #f6f1f9;
            --text-color: #333;
            --text-gray-color: #666;
            --page-font: Rubik, NotoSans, Roboto, Helvetica, Arial, serif;
            --bullet-color: black;
            --link-color: #004a94;
            --link-active-color: #00254a;
            --link-visited-color: rgba(0, 74, 148, 0.2);
            --link-hover-color:  #d7370f;
            --link-hover-border: rgba(215, 55, 15, 0.2);
            --snackbar-bg: #fff;
            --snackbar-color: #363636;
        }
    }

    :global(body) {
        margin: 0;
        direction: ltr;
        font-family: var(--page-font);
        font-size: 18px;
        font-weight: 400;
        line-height: 1.3;
        background: var(--bg-color);
        transition-property: background, color;
        transition-duration: 0.33s;
        transition-timing-function: ease-out;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto;
    }

    :global(input) {
        direction: ltr;
        font-family: var(--page-font);
        font-size: 18px;
        font-weight: 400;
        line-height: 1.3;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto;
    }

    :global(:focus),
    :global(:focus-visible) {
        outline: none;
        border-radius: 0.5rem;
        box-shadow: 0 0 0 var(--outline-width) var(--focus-color);

    }

    :global(:focus:not(:focus-visible)) {
        outline: none;
        box-shadow: none;
    }

    .header {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
    }

    .page {
        color: var(--text-color);
        padding: 1rem 4% 0;
        transition-property: background, color;
        transition-duration: 0.33s;
        transition-timing-function: ease-out;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media screen and (min-width: 700px) {
        .page {
            padding: 1rem 8% 0;
        }
    }

    button {
        -webkit-appearance: none;
        border: none;
        background: transparent;
    }
</style>
