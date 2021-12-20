<script>
    import PageLink from '../components/PageLink.svelte'
    import List from '../components/List.svelte'
    import ListItem from '../components/ListItem.svelte'
    import GithubFavicon from '../components/GithubFavicon.svelte';

    export let items = []
</script>

<List class="projects" {...$$props}>
    {#each items as item (item.title)}
        <ListItem class="projects__item">
            <GithubFavicon class="projects__item-icon" aria-hidden="true" />
            <PageLink class="projects__item-link" href={item.url}>
                { item.title }
            </PageLink>
            <span class="projects__item-text">
              — { item.text }
            </span>
        </ListItem>
    {/each}
</List>

<style>
    .projects .projects__item-link.projects__item-link,
    .projects .projects__item-icon.projects__item-icon {
        display: inline-block;
        vertical-align: middle;
        margin-right: 0.25rem;
    }
</style>
