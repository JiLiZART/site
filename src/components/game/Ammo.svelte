<script>
    import Panel from './Panel.svelte';
</script>
<Panel>
    <div class="shots">
        <div class="ammo">
            <div class="bullet active"></div>
            <div class="bullet active"></div>
            <div class="bullet"></div>
        </div>
        <div class="text">SHOT</div>
    </div>
</Panel>

<style>
    .shots {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .shots .text {
        font-size: 3.9rem;
        text-align: center;
        color: #64b0ff;
        margin-left: 8px;
    }

    .shots .ammo {
        display: flex;
    }

    .shots .bullet {
        width: 40px;
        height: 42px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    .shots .bullet.active {
        background-image: url('../../assets/game/hud/bullet/0.png');
    }
</style>
