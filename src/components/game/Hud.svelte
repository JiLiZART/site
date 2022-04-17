<section class="hud">
    <slot></slot>
</section>

<style>
    .hud {
        user-select: none;
        position: fixed;
        width: 100vw;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 22px;
        padding: 10px;
        background: #CB6A00;

        z-index: 40;
    }
</style>
