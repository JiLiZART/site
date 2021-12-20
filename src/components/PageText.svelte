<script>
    export let small = false
    export let gray = false
</script>

<span class="text" class:small={small} class:gray={gray}>
    <slot></slot>
</span>

<style>
    .text {
        display: inline-block;
        margin: 0 0 0.5rem;
    }

    .small {
        font-size: 1rem;
        font-weight: 300;
    }
    .gray {
        color: #666;
    }
    @media screen and (min-width: 700px) {
        .small {
            font-size: 1.425rem;
            line-height: 1.3;
            max-width: 825px;
        }

    }
</style>
