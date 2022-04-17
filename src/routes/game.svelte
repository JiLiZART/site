<script>
    import Hud from '../components/game/Hud.svelte';
    import Panel from '../components/game/Panel.svelte';
    import Dog from '../components/game/Dog.svelte';
</script>


<section class="game">
    <Dog sniff bottom />
    <Dog single bottom />
    <Dog double bottom />

    <div class="tree"></div>
</section>

<Hud>
    <Panel>Score 001</Panel>
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
    <Panel>
        <div class="score">
            000000<br/>SCORE
        </div>
    </Panel>
</Hud>

<style>
    @font-face {
        font-family: "Arcade";
        src: url("../assets/game/font/ARCADECLASSIC.woff2") format("woff2");
    }
    :global(body) {
        background: #64b0ff;
    }

    .game {
        position: fixed;
        bottom: 134px;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 40;
    }

    .game::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        background-image: url('../assets/game/scene/back/0.png');
        z-index: 40;
        width: 100vw;
        height: 600px;
    }

    .tree {
        position: absolute;
        left: calc(50% - 356px);
        bottom: 104px;
        height: 260px;
        width: 173px;
        background-image: url('../assets/game/scene/tree/0.png');
    }

    .score {
        font-size: 4.7rem;
        text-align: right;
    }

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
        display: flex;
        gap: 4px;
    }

    .stats .round {
        width: 8px;
        height: 28px;
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
        background-image: url('../assets/game/hud/score-live/0.png');
    }

    .stats .duck.dead {
        background-image: url('../assets/game/hud/score-dead/0.png');
    }
</style>
