<script>
    import HeadingSecondary from '../components/HeadingSecondary.svelte'
    import PageText from '../components/PageText.svelte'
    import PageLink from '../components/PageLink.svelte'

    export let links = []
</script>
<footer
    id="data-author"
    class="footer"
    itemprop="author"
    itemscope
    itemtype="http://schema.org/Person"
    role="contentinfo"
>
    <HeadingSecondary>You can contact me 🤙</HeadingSecondary>
    <meta itemprop="name" content="Николай Костюрин">
    <section class="section">
        <PageText>By Skype
            <PageLink rel="me" href={links.skype} itemprop="skype" aria-label="Contact me at Skype">JiLiZART</PageLink>
            or drop a line to
            <PageLink rel="me" href={links.mailto} itemprop="email" aria-label="Contact me at Email">nikolay@artkost.ru</PageLink>
            .
        </PageText>
        <PageText>Also you can find me on
            <PageLink rel="me" href={links.twitter} itemprop="twitter" aria-label="Contact in Twitter">Twitter</PageLink>
            ,
            <PageLink rel="me"
                      href={links.linkedin} itemprop="linkedin" aria-label="Contact in Linkedin">Linkedin
            </PageLink>
            ,
            <PageLink rel="me"
                      href={links.facebook} itemprop="facebook" aria-label="Contact in Facebook">Facebook
            </PageLink>
            ,
            <PageLink rel="me"
                      href={links.telegram} itemprop="telegram" aria-label="Contact in Telegram">Telegram
            </PageLink>
            and
            <PageLink rel="me"
                      href={links.github} itemprop="github" aria-label="Contact on Github">Github
            </PageLink>
        </PageText>
        <PageText>For HR I have
            <PageLink rel="me" href={links.cv} aria-label="Link to CV">CV</PageLink>. <span aria-hidden="true">⚡</span>SvelteKit
            <PageLink href={links.repo} aria-label="Github source of this site">Github Repo</PageLink>
        </PageText>
    </section>
</footer>

<style>
    .footer,
    .section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .section {
        gap: 0.5rem;
    }
</style>
