<script>
    export let bullets = false
    let className = '';

    export { className as class };
</script>

<ul role="list {$$props['role'] || ''}" class="list {className}" class:bullets={bullets} aria-label="{$$props['aria-label']}">
    <slot></slot>
</ul>

<style>
    .list {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .bullets {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: black;
    }
</style>
