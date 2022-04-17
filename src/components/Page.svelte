<div class="page" itemref="data-author" itemscope itemtype="http://schema.org/WebSite">
    <slot></slot>
</div>

<style>
    .page {
        color: #333;
        padding: 10px 4% 0;
        transition-property: background, color;
        transition-duration: 0.33s;
        transition-timing-function: ease-out;
    }

    @media screen and (min-width: 700px) {
        .page {
            padding: 10px 8% 0;
        }
    }
</style>
