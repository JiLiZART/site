<script>
    export let itemprop = ''
</script>

<h3 {...$$props} class="h1" itemprop={itemprop}>
    <slot></slot>
</h3>

<style>
    .h1 {
        display: flex;
        align-items: center;
        margin: 0;
        font-size: 2.25rem;
        font-weight: 400;
        width: 100%;
    }
    @media screen and (min-width: 700px) {
        .h1 {
            font-size: 3.875rem;
            width: auto;
        }
    }
</style>
