<script>
    export let small = false
    export let gray = false
</script>

<span class="page__text" class:page__text_small={small} class:page__text_gray={gray}>
    <slot></slot>
</span>

<style>
    .page__text {
        margin: 0 0 0.5rem;
    }
    /*.page__text h1,*/
    /*.page__text h2,*/
    /*.page__text h3 {*/
    /*    margin: 1rem 0 1rem;*/
    /*}*/
    /*.page__text h1 {*/
    /*    font-size: 2.25rem;*/
    /*    font-weight: 400;*/
    /*}*/
    /*.page__text h2 {*/
    /*    font-size: 2.25rem;*/
    /*    font-weight: 400;*/
    /*}*/
    /*.page__text h3 {*/
    /*    font-size: 1.625rem;*/
    /*    font-weight: 500;*/
    /*}*/
    /*.page__text p {*/
    /*    margin: 0 0 0.5rem;*/
    /*}*/
    .page__text_small {
        font-size: 1rem;
        font-weight: 300;
    }
    .page__text_gray {
        color: #666;
    }
    @media screen and (min-width: 700px) {
        /*.page__text h1 {*/
        /*    font-size: 3.875rem;*/
        /*}*/

        /*.page__text h3 {*/
        /*    font-size: 2.125rem;*/
        /*}*/
        .page__text_small {
            font-size: 1.425rem;
            line-height: 1.3;
            max-width: 825px;
        }

    }
</style>
