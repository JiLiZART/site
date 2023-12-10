<script>
    export let href = null
    export let active = false
    export let small = false
    export let light = false
    let className = '';

    export { className as class };
</script>

<a {...$$props} href={href} target="_blank" rel="noopener noreferrer nofollow" class={`link ${className}`}
   class:active={active} class:small={small} class:light={light} class:leftXs={$$props['left-xs']}>
    <slot></slot>
</a>

<style>
    .link {
        color: var(--link-color);
        fill: var(--link-color);
        text-decoration: none;
        transition-property: border-bottom, border-color, background, color, fill;
        transition-duration: 0.33s;
        transition-timing-function: ease-out;
    }

    .link:visited {
        color: var(--link-visited-color);
    }

    .link:hover {
        color: var(--link-hover-color);
        fill: var(--link-hover-color);
        border-color: var(--link-hover-border);
        transition: none;
    }

    .active {
        color: var(--link-active-color);
    }

    .small {
        font-size: 1.5rem;
    }

    .light {
        font-weight: 300;
    }
</style>
