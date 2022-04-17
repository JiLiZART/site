<script>
    import PageDescription from '../components/PageDescription.svelte'
    import PageLink from '../components/PageLink.svelte'
    import PageText from '../components/PageText.svelte'
    import Main from '../components/Main.svelte'
    import List from '../components/List.svelte'
    import ListItem from '../components/ListItem.svelte'
    import HeaderGroup from '../components/HeaderGroup.svelte'
    import HeadingSecondary from '../components/HeadingSecondary.svelte'
    import HeadingPrimary from '../components/HeadingPrimary.svelte'
    import TechsLogos from '../components/TechsLogos.svelte'
    import Articles from '../components/Articles.svelte';
    import Projects from '../components/Projects.svelte';
    import Badge from '../components/Badge.svelte';
    import Footer from '../components/Footer.svelte'
    import habrArticles from '../data/articles';
    import githubProjects from '../data/projects';
    import links from '../data/links';
</script>

<section itemprop="author" itemscope itemtype="http://schema.org/Person">
    <header role="banner" tabindex="1">
        <HeaderGroup>
            <HeadingPrimary itemprop="name">
                Николай Костюрин
            </HeadingPrimary>
            <PageLink small="{true}" light="{true}" href={links.telegram}>@jilizart</PageLink>
            <PageLink small="{true}" light="{true}" href={links.mailto}>@mail</PageLink>
            <PageLink small="{true}" light="{true}" href={links.cv}>cv</PageLink>
        </HeaderGroup>
        <PageDescription>
            <PageText>JavaScript Разработчик</PageText>
            <PageText gray small>
                Работал над проектами
                <PageLink href="https://musescore.com" aria-label="Проект Musescore">
                    Musescore
                </PageLink>
                <span aria-hidden="true">🎶</span>
                и
                <PageLink href="https://www.ultimate-guitar.com/" aria-label="Проект Ultimate Guitar">
                    Ultimate Guitar
                </PageLink>
                <span aria-hidden="true">🎸</span>, так же работал в
                <PageLink href="https://skyeng.ru/" aria-label="Skyeng">
                    Skyeng
                </PageLink>
                👷,
                проектировал SPA в
                <PageLink href="https://www.medialooks.com" aria-label="Medialooks">
                    Medialooks
                </PageLink>
                👨‍🏫 и
                создавал сложные интерфейсы в
                <PageLink href="http://edster.ru" aria-label="Edster">
                    Edster
                </PageLink>
                👨‍💻
            </PageText>
        </PageDescription>
    </header>
    <Main>
        <article tabindex="2">
            <TechsLogos/>
            <List bullets aria-label="Список ключевых слов технологий">
                <ListItem itemprop="keywords">
                    <b>React</b>, Redux, MobX, ReactRouter, Next.js
                </ListItem>
                <ListItem itemprop="keywords">
                    <b>Vue.js</b>, Vuex, VueRouter, Nuxt.js
                </ListItem>
                <ListItem itemprop="keywords">
                    <b>Svelte</b>, SvelteKit
                </ListItem>
                <ListItem itemprop="keywords">
                    JavaScript ES5, ES6, <b>TypeScript</b>, Node.js
                </ListItem>
            </List>
            <List aria-label="Список менее ключевых слов технологий">
                <ListItem itemprop="keywords">
                    REST API на Express, Koa, Adonis.js по
                    <PageLink href="http://jsonapi.org/">
                        jsonapi
                    </PageLink>
                    стандарт используя
                    <PageLink href="http://json-schema.org/">
                        json schema
                    </PageLink>
                    и
                    <PageLink href="https://jwt.io/">
                        JWT
                    </PageLink>
                </ListItem>
                <ListItem itemprop="keywords">
                    HTML5, CSS3, Stylus, Less, Sass, PostCSS и БЭМ методология
                </ListItem>
                <ListItem itemprop="keywords">
                    <i>Сборщики Webpack, Gulp, Grunt</i>
                </ListItem>
                <ListItem>
                    <i>jQuery, ну а как без него?</i>
                </ListItem>
            </List>
        </article>
        <article tabindex="3">
            <HeadingSecondary>
                Что изучаю
            </HeadingSecondary>
            <List aria-label="Список книг которые читаю">
                <ListItem>
                    Прошёл курс
                    <PageLink
                        aria-label="Прошёл курс Введение в архитектуру ЭВМ. Элементы операционных систем."
                        href="https://stepik.org/cert/1093412"
                    >
                        <s>Введение в архитектуру ЭВМ. Элементы операционных систем.</s>
                    </PageLink>
                </ListItem>
                <ListItem>
                    Книгу
                    <PageLink
                        aria-label="Прочитал книгу Чистая архитектура. Искусство разработки программного обеспечения"
                        href="https://www.ozon.ru/product/chistaya-arhitektura-iskusstvo-razrabotki-programmnogo-obespecheniya-martin-robert-martin-robert-211433166/"
                    >
                        <s>Чистая архитектура. Искусство разработки программного обеспечения</s>
                    </PageLink>
                </ListItem>
                <ListItem>
                    Книгу
                    <PageLink
                        aria-label="Прочитал книгу The Swift Programming Language"
                        href="https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html"
                    >
                        <s>
                            The
                            Swift Programming Language
                        </s>
                    </PageLink>
                </ListItem>

                <ListItem>
                    <PageLink
                        aria-label="Прочитал Angular 2 Developer Guide"
                        href="https://angular.io/docs/ts/latest/guide/"
                    >
                        <s>Angular 2 Developer Guide</s>
                    </PageLink>
                </ListItem>

                <ListItem>
                    Книгу
                    <PageLink
                        aria-label="Прочитал книгу The Rust Programming Language"
                        href="https://rurust.github.io/rust_book_ru/"
                    >
                        <s>The Rust Programming Language</s>
                    </PageLink>
                </ListItem>

                <ListItem>
                    Книгу
                    <PageLink
                        aria-label="Прочитал книгу The Lean Startup"
                        href="https://www.ozon.ru/context/detail/id/18322266/"
                    >
                        <s>
                            The
                            Lean Startup
                        </s>
                    </PageLink>
                </ListItem>
                <ListItem>
                    А еще решаю непростые задачки нa
                    <PageLink aria-label="Профиль на Codewars" href="https://www.codewars.com/users/JiLiZART">
                        Codewars
                        <Badge url={links.codewarsBadge} title="Codewards Badge"/>
                    </PageLink>
                    <br>
                    и
                    <PageLink aria-label="Профиль на Hackerrank" href="https://www.hackerrank.com/JiLiZART">
                        Hackerrank
                    </PageLink>
                    с помощью js и Swift
                </ListItem>
            </List>
        </article>
        <article tabindex="4">
            <HeadingSecondary>Мои поделки</HeadingSecondary>
            <Projects items={githubProjects} aria-label="Список проектов на Гитхабе"/>
        </article>
        <article tabindex="5">
            <HeadingSecondary>Пишу на Хабрахабр <span aria-hidden="true">📝</span></HeadingSecondary>
            <Articles items={habrArticles} aria-label="Список статей на Хабре"/>
        </article>
    </Main>
    <Footer links={links} />
</section>
