<script>
    import Panel from './Panel.svelte';
</script>
<Panel>
    <div class="stats">
        <div class="hit">HIT</div>
        <div class="counts">
            <div class="ducks">
                <div class="duck live"></div>
                <div class="duck dead"></div>
                <div class="duck live"></div>
                <div class="duck dead"></div>

                <div class="duck live"></div>
                <div class="duck live"></div>
                <div class="duck live"></div>
                <div class="duck live"></div>
                <div class="duck live"></div>
                <div class="duck live"></div>
            </div>
            <div class="rounds">
                <div class="round active"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
                <div class="round"></div>
            </div>
        </div>
    </div>
</Panel>

<style>

    .stats {
        display: flex;
        gap: 22px;
    }

    .stats .hit {
        font-size: 3.9rem;
        color: #9beb00;
        margin-top: 4px;
        margin-left: 4px;
    }

    .stats .counts {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .stats .rounds {
        margin-top: 10px;
        display: flex;
        gap: 4px;
    }

    .stats .round {
        width: 8px;
        height: 32px;
        background: #64b0ff;
    }

    .stats .ducks {
        display: flex;
    }

    .stats .duck {
        width: 40px;
        height: 40px;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .stats .duck.live {
        background-image: url('../../assets/game/hud/score-live/0.png');
    }

    .stats .duck.dead {
        background-image: url('../../assets/game/hud/score-dead/0.png');
    }
</style>
