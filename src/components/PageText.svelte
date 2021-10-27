<div class="page__text">
    <slot></slot>
</div>

<style >
    .page__text {
        margin: 0;
        margin-bottom: 0.5rem;
    }
    .page__text h1,
    .page__text h2,
    .page__text h3 {
        margin: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .page__text h1 {
        font-size: 2.25rem;
        font-weight: 400;
    }
    @media screen and (min-width: 700px) {
        .page__text h1 {
            font-size: 3.875rem;
        }
    }
    .page__text h2 {
        font-size: 2.25rem;
        font-weight: 400;
    }
    .page__text h3 {
        font-size: 1.625rem;
        font-weight: 500;
    }
    @media screen and (min-width: 700px) {
        .page__text h3 {
            font-size: 2.125rem;
        }
    }
    .page__text p {
        margin: 0;
        margin-bottom: 0.5rem;
    }
</style>
