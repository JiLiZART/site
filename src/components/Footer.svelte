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
    <HeadingSecondary>Со мной можно связаться 🤙</HeadingSecondary>
    <meta itemprop="name" content="Николай Костюрин">
    <PageText>По скайпу
        <PageLink href={links.skype} itemprop="skype" aria-label="Контакт в Skype">JiLiZART</PageLink>
        или написать на почту
        <PageLink href={links.mailto} itemprop="email" aria-label="Контакт по Email">nikolay@artkost.ru</PageLink>
        .
    </PageText>
    <PageText>Так же я есть в
        <PageLink href={links.twitter} itemprop="twitter" aria-label="Контакт в Twitter">Twitter</PageLink>
        ,
        <PageLink
            href={links.linkedin} itemprop="linkedin" aria-label="Контакт в Linkedin">Linkedin
        </PageLink>
        ,
        <PageLink
            href={links.facebook} itemprop="facebook" aria-label="Контакт в Facebook">Facebook
        </PageLink>
        ,
        <PageLink
            href={links.telegram} itemprop="telegram" aria-label="Контакт в Telegram">Telegram
        </PageLink>
        и
        <PageLink
            href={links.github} itemprop="github" aria-label="Контакт на Github">Github
        </PageLink>
    </PageText>
    <br>
    <PageText>Для HR у меня есть
        <PageLink href={links.cv} aria-label="Ссылка на Резюме">CV</PageLink>.
    </PageText>
    <PageText><span aria-hidden="true">⚡</span>SvelteKit
        <PageLink href={links.repo} aria-label="Ссылка на Github этого сайта">Github Repo</PageLink>
    </PageText>
</footer>

