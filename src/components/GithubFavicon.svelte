<span {...$$props} class="github-favicon" title="Github"></span>

<style>
    .github-favicon {
        display: inline-block;
        vertical-align: top;
        width: 1rem;
        height: 1rem;
        background: url("../assets/github-favicon.svg") 50% 50% no-repeat;
        background-size: 1rem 1rem;
    }
    @media (prefers-color-scheme: dark) {
        .github-favicon {
            filter: invert(100%);
        }
    }
    :global(body.dark-mode) .github-favicon {
        filter: invert(100%);
    }
    :global(body.light-mode) .github-favicon {
        filter: invert(0);
    }
</style>
