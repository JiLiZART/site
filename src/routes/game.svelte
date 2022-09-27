<script>
    import { onMount } from 'svelte'
    import Hud from '../components/game/Hud.svelte';
    import Dog from '../components/game/Dog.svelte';
    import Duck from '../components/game/Duck.svelte';
    import Tree from '../components/game/Tree.svelte';
    import Stats from '../components/game/Stats.svelte';
    import Ammo from '../components/game/Ammo.svelte';
    import Score from '../components/game/Score.svelte';

    let running = false;
    let score = 0
    let round = 0;

    onMount(() => {

    })
</script>

<section class="game">
    <Duck dead />
    <Duck left />

    <Dog sniff bottom />
    <Dog single bottom />
    <Dog double bottom />

    <Tree />
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

</style>
