<script>
    import Hud from '../components/game/Hud.svelte';
    import Dog from '../components/game/Dog.svelte';
    import Stats from '../components/game/Stats.svelte';
    import Ammo from '../components/game/Ammo.svelte';
    import Score from '../components/game/Score.svelte';
</script>

<section class="game">
    <Dog sniff bottom />
    <Dog single bottom />
    <Dog double bottom />

    <div class="tree"></div>
</section>

<Hud>
    <Ammo />
    <Stats />
    <Score />
</Hud>

<style>
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

</style>
