<script>
    let className = '';

    export { className as class };
</script>

<li {...$$props} class="item {className}" role="listitem">
    <slot></slot>
</li>

<style>
    .item {
        margin-bottom: 0.5rem;
    }
</style>
