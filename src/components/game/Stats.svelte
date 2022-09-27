<script>
    import Panel from './Panel.svelte';

    let rounds = Array.from({ length: 10 }, (_, i) => i + 1);
    let activeRound = 2;

    let ducks = Array.from({ length: 10 }, (_, i) => i + 1).map(idx => ({
        id: idx,
        name: `Duck ${idx}`,
        dead: idx % 2 === 0,
    }))

</script>
<Panel>
    <div class="stats">
        <div class="hit">HIT</div>
        <div class="counts">
            <div class="ducks">
                {#each ducks as duck}
                    <div class="duck" class:dead={duck.dead}></div>
                {/each}
            </div>
            <div class="rounds">
                {#each rounds as roundIndex}
                    <div class="round" class:active={roundIndex === activeRound}></div>
                {/each}
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
        background-image: url('../../assets/game/hud/score-live/0.png');
    }

    .stats .duck.dead {
        background-image: url('../../assets/game/hud/score-dead/0.png');
    }
</style>
