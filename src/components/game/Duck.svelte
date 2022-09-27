<div class="duck"
     class:dead={$$props['dead']}
     class:left={$$props['left']}
     class:right={$$props['right']}
     class:shot={$$props['shot']}
     class:top-left={$$props['top-left']}
     class:top-right={$$props['top-right']}
></div>

<style>
    /* https://www.toptal.com/developers/css/sprite-generator/ */
    .duck {
        position: absolute;
    }

    .duck.dead {
        width: 75px;
        height: 75px;
        background: url('../../assets/game/duck/black/dead/sprite.png') -0 -0;
        animation: dead 0.5s steps(2) infinite;
        z-index: 50;
        top: 200px;
        left: 45%;
    }

    @keyframes dead {
        100% {
            background-position: -150px -0;
        }
    }

    .duck.left {
        width: 75px;
        height: 75px;
        background: url('../../assets/game/duck/black/left/sprite.png') -0 -0;
        animation: lefta 1s steps(3) infinite;
        z-index: 50;
        top: 300px;
        left: 45%;
    }

    @keyframes lefta {
        99% {
            background-position: -150px 0;
        }
    }
</style>
