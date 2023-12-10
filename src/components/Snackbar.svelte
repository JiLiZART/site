<style>
    .snackbar {
        visibility: hidden;
        min-width: 250px;
        margin-left: -125px;
        text-align: center;
        position: fixed;
        z-index: 1;
        left: 50%;
        bottom: 30px;

        display: flex;
        align-items: center;
        background: var(--snackbar-bg);
        color: var(--snackbar-color);
        line-height: 1.3;
        will-change: transform;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
        max-width: 350px;
        pointer-events: auto;
        padding: 8px 10px;
        border-radius: 8px;
    }

    .snackbar.show {
        visibility: visible;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    @keyframes fadein {
        /*0%{opacity:0;} 100%{opacity:1;}*/
        0% {transform: translate3d(0,200%,0) scale(.6); opacity:.5;}
        100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
    }

    @keyframes fadeout {
        /*from {bottom: 30px; opacity: 1;}*/
        /*to {bottom: 0; opacity: 0;}*/
        0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
        100% {transform: translate3d(0, 150%,-1px) scale(.6); opacity:0;}
    }
</style>

<script>
    export let show = false
</script>

<div class="snackbar" class:show={show}>
    <slot></slot>
</div>
