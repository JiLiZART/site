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
    .projects__item {
        align-items: center;
    }
</style>
