<main class="main" role="main">
    <slot></slot>
</main>

<style>
    .main {
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
