<script>
    export let href = null
</script>

<a {...$$props} href={href} target="_blank" rel="noopener noreferrer nofollow" class="page__link">
    <slot></slot>
</a>

<style>
    .page__link {
        color: #004a94;
        fill: #004a94;
        text-decoration: none;
        transition-property: border-bottom, border-color, background, color, fill;
        transition-duration: 0.33s;
        transition-timing-function: ease-out;
    }
    .page__link:visited {
        color: rgba(0,74,148,0.2);
    }
    .page__link:hover {
        color: #d7370f;
        fill: #d7370f;
        border-color: rgba(215,55,15,0.2);
        transition: none;
    }
    .page__link.active {
        color: #00254a;
    }
</style>
