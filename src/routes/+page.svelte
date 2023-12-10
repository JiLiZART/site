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
    import habrArticles from '../data/articles';
    import githubProjects from '../data/projects';
    import links from '../data/links';
    // Занимался крутыми проектами для Musescore 🎶 и Ultimate Guitar 🎸, заработал опыт в Skyeng 👷, придумывал SPA в Medialooks 👨‍🏫 и творил сложные интерфейсы в Edster.
    // I've worked on exciting projects for Musescore 🎶 and Ultimate Guitar 🎸, gained experience at Skyeng 👷, designed SPAs at Medialooks 👨‍🏫, and crafted intricate interfaces at Edster.
</script>

<section class="person" itemprop="author" itemscope itemtype="https://schema.org/Person">
    <header role="banner">
        <HeaderGroup>
            <HeadingPrimary itemprop={"name"}>
                Nikolay Kost
            </HeadingPrimary>
            <PageLink small="{true}" light="{true}" href={links.telegram}>@jilizart</PageLink>
            <PageLink small="{true}" light="{true}" href={links.mailto}>@mail</PageLink>
            <PageLink small="{true}" light="{true}" href={links.cv}>cv</PageLink>
        </HeaderGroup>
        <PageDescription>
            <PageText>JavaScript Developer</PageText>
            <PageText gray small>
                I've worked on exciting projects for
                <PageLink href="https://musescore.com" aria-label="Проект Musescore">
                    Musescore
                </PageLink>
                <span aria-hidden="true">🎶</span>
                and
                <PageLink href="https://www.ultimate-guitar.com/" aria-label="Проект Ultimate Guitar">
                    Ultimate Guitar
                </PageLink>
                at
                <PageLink href="https://www.mu.se/" aria-label="Muse Group">
                    Muse Group
                </PageLink>
                <span aria-hidden="true">🎸</span>, gained experience at
                <PageLink href="https://skyeng.ru/" aria-label="Skyeng">
                    Skyeng
                </PageLink>
                👷, designed SPAs at
                <PageLink href="https://www.medialooks.com" aria-label="Medialooks">
                    Medialooks
                </PageLink>
                👨‍🏫 and creator of
                <PageLink href="https://github.com/JiLiZART/BBob" aria-label="Edster">
                    Fast BBCode Parser
                </PageLink>
                👨‍💻
            </PageText>
        </PageDescription>
    </header>
    <Main>
        <section class="section">
            <TechsLogos/>
            <List bullets aria-label="List of technologies keywords">
                <ListItem itemprop="keywords">
                    <b>React,</b> Redux, MobX, ReactRouter, Next.js
                </ListItem>
                <ListItem itemprop="keywords">
                    <b>Vue.js,</b> Vuex, VueRouter, Nuxt.js
                </ListItem>
                <ListItem itemprop="keywords">
                    <b>Svelte,</b> SvelteKit
                </ListItem>
                <ListItem itemprop="keywords">
                    JavaScript ES5, ES6, <b>TypeScript,</b> Node.js
                </ListItem>
            </List>
            <List aria-label="Список менее ключевых слов технологий">
                <ListItem itemprop="keywords">
                    REST API на Express, Koa, Adonis.js по
                    <PageLink href="http://jsonapi.org/">
                        jsonapi
                    </PageLink>
                    standard using
                    <PageLink href="http://json-schema.org/">
                        json schema
                    </PageLink>
                    and
                    <PageLink href="https://jwt.io/">
                        JWT
                    </PageLink>
                </ListItem>
                <ListItem itemprop="keywords">
                    HTML5, CSS3, Stylus, Less, Sass, PostCSS and BEM methodology
                </ListItem>
                <ListItem itemprop="keywords">
                    <i>Webpack, Gulp, Grunt builders</i>
                </ListItem>
                <ListItem>
                    <i>jQuery, who remember it?</i>
                </ListItem>
            </List>
        </section>
        <article class="section">
            <HeadingSecondary>
                What I learning
            </HeadingSecondary>
            <List aria-label="List of books I read">
                <ListItem>
                    Completed the course
                    <PageLink
                        aria-label="Completed the course Introduction to computer architecture. Elements of operating systems."
                        href="https://stepik.org/cert/1093412"
                    >
                        <s>Introduction to computer architecture. Elements of operating systems.</s>
                    </PageLink>
                </ListItem>
                <ListItem>
                    Книгу
                    <PageLink
                        aria-label="Read the book Clean Architecture. A Craftsman's Guide to Software Structure and Design"
                        href="https://www.ozon.ru/product/chistaya-arhitektura-iskusstvo-razrabotki-programmnogo-obespecheniya-martin-robert-martin-robert-211433166/"
                    >
                        <s>Clean Architecture. A Craftsman's Guide to Software Structure and Design</s>
                    </PageLink>
                </ListItem>
                <ListItem>
                    Book
                    <PageLink
                        aria-label="Read the book The Swift Programming Language"
                        href="https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/index.html"
                    >
                        <s>The Swift Programming Language</s>
                    </PageLink>
                </ListItem>

                <ListItem>
                    <PageLink
                        aria-label="Read the Angular 2 Developer Guide"
                        href="https://angular.io/docs/ts/latest/guide/"
                    >
                        <s>Angular 2 Developer Guide</s>
                    </PageLink>
                </ListItem>

                <ListItem>
                    Book
                    <PageLink
                        aria-label="Read the book The Rust Programming Language"
                        href="https://doc.rust-lang.org/book/"
                    >
                        <s>The Rust Programming Language</s>
                    </PageLink>
                </ListItem>

                <ListItem>
                    Book
                    <PageLink
                        aria-label="Read the book The Lean Startup"
                        href="https://www.amazon.com/-/en/Eric-Ries/dp/0307887898"
                    >
                        <s>The Lean Startup</s>
                    </PageLink>
                </ListItem>
                <ListItem>
                    I also solve difficult problems on
                    <PageLink aria-label="Profile on Codewars" href="https://www.codewars.com/users/JiLiZART">
                        Codewars
                        <Badge url={links.codewarsBadge} title="Codewards Badge"/>
                    </PageLink>
                    and
                    <PageLink aria-label="Profile on Hackerrank" href="https://www.hackerrank.com/JiLiZART">
                        Hackerrank
                    </PageLink>
                    using JS and Swift
                </ListItem>
            </List>
        </article>
        <article class="section">
            <HeadingSecondary>My Crafts</HeadingSecondary>
            <Projects items={githubProjects} aria-label="Список проектов на Гитхабе"/>
        </article>
        <article class="section">
            <HeadingSecondary>I am writing on Habr <span aria-hidden="true">📝</span></HeadingSecondary>
            <Articles items={habrArticles} aria-label="Articles on Habr"/>
        </article>
    </Main>
</section>

<style>
    .section,
    .person {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
