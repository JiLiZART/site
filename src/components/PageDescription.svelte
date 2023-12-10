<div class="description"><slot></slot></div>

<style>
    .description {
        font-size: 1.625rem;
        font-weight: 300;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    @media screen and (min-width: 700px) {
        .description {
            font-size: 2.25rem;
            max-width: 950px;
        }
    }
</style>
