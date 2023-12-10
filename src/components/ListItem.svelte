<script>
    let className = '';

    export { className as class };
</script>

<li {...$$props} class="item {className}">
    <slot></slot>
</li>

<style>
    .item {
        display: inline-flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 0.25rem;
    }
</style>
