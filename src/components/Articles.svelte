<script>
    import PageLink from '../components/PageLink.svelte'
    import List from '../components/List.svelte'
    import ListItem from '../components/ListItem.svelte'
    import HabrFavicon from '../components/HabrFavicon.svelte';

    export let items = []
</script>

<List class="articles" {...$$props}>
    {#each items as item (item.title)}
        <ListItem class="articles__item">
            <HabrFavicon class="articles__item-icon" aria-hidden="true" />
            <PageLink class="articles__item-link" href={item.url}>
                { item.title }
            </PageLink>
        </ListItem>
    {/each}
</List>

<style>
    .articles__item {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .articles__item-link.articles__item-link,
    .articles__item-icon.articles__item-icon {
        display: inline-block;
        vertical-align: middle;
        margin-right: 0.25rem;
    }
</style>
