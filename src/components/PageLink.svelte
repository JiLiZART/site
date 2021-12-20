<script>
    export let href = null
    export let active = false
    let className = '';

    export { className as class };
</script>

<a {...$$props} href={href} target="_blank" rel="noopener noreferrer nofollow" class={`link ${className}`}
   class:active={active}>
    <slot></slot>
</a>

<style>
    .link {
        color: #004a94;
        fill: #004a94;
        text-decoration: none;
        transition-property: border-bottom, border-color, background, color, fill;
        transition-duration: 0.33s;
        transition-timing-function: ease-out;
    }

    .link:visited {
        color: rgba(0, 74, 148, 0.2);
    }

    .link:hover {
        color: #d7370f;
        fill: #d7370f;
        border-color: rgba(215, 55, 15, 0.2);
        transition: none;
    }

    .active {
        color: #00254a;
    }
</style>
