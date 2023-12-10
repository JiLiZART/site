<main class="main">
    <slot></slot>
</main>

<style>
    .main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }

    @media screen and (min-width: 700px) {
        .main {
            flex-wrap: nowrap;
        }
    }
</style>
