<script>
    import Logo from '../components/Logo.svelte'
    import Link from '../components/PageLink.svelte'
    import Footer from '../components/Footer.svelte'
    import links from '../data/links';
</script>

<svelte:head>
    <link rel="dns-prefetch" href="//google-analytics.com">
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WCBMSF');</script>
    <!-- End Google Tag Manager -->

    <title>Николай Костюрин — JavaScript Разработчк - https://artkost.ru/</title>
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
        <Link small light href="/hex">#color</Link>
    </header>
    <slot></slot>
    <Footer links={links} />
</div>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCBMSF"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<img src="/stat.gif" alt="Stats pixel" layout="fixed" height="1px" width="1px" />
<img src="https://mc.yandex.ru/watch/860366" style="position:absolute; left:-9999px;" alt="" />

<style>
    :root {
        --outline-width: calc(1rem / 16 * 3);
    }
    :global(body) {
        margin: 0;
        direction: ltr;
        font-family: Rubik, NotoSans, Roboto, Helvetica, Arial, serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.3;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto;
        background: #f6f1f9;
        transition-property: background, color;
        transition-duration: 0.33s;
        transition-timing-function: ease-out;
    }

    :global(input) {
        direction: ltr;
        font-family: Rubik, NotoSans, Roboto, Helvetica, Arial, serif;
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
        box-shadow: 0 0 0 var(--outline-width) rgba(0, 74, 148, 0.4);

    }

    :global(:focus:not(:focus-visible)) {
        outline: none;
        box-shadow: none;
    }

    .header {
        display: flex;
        align-items: flex-start;
        margin: 1rem 0;
        gap: 1rem;
    }

    .page {
        color: #333;
        padding: 10px 4% 0;
        transition-property: background, color;
        transition-duration: 0.33s;
        transition-timing-function: ease-out;
    }
    @media screen and (min-width: 700px) {
        .page {
            padding: 10px 8% 0;
        }
    }
</style>
