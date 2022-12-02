<main class="main">
    <slot></slot>
</main>

<style>
    .main {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    @media screen and (min-width: 700px) {
        .main {
            flex-wrap: nowrap;
        }
    }
    .main article {
        margin-bottom: 1rem;
    }
</style>
