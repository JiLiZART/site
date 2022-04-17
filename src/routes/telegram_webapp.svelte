
<svelte:head>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        if (window?.Telegram?.WebApp) {
            window?.Telegram?.WebApp.ready()
        }
    })

    function onClick() {
        if (window?.Telegram?.WebApp) {
            window.Telegram.WebApp.close()
        }
    }
</script>

<section>
    <button class="button" on:click={onClick}>
        Close
    </button>
</section>

<style>
    :global(html) {
        background-color: var(--tg-theme-bg-color);
    }

    .button {
        display: flex;
        width: 100%;
        color: var(--tg-theme-button-text-color, white);
        background: var(--tg-theme-button-color, black);
        margin: 0 10px;
        padding: 8px 14px;
    }
</style>
