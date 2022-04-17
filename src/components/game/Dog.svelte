<div class="dog"
     class:sniff={$$props['sniff']}
     class:single={$$props['single']}
     class:double={$$props['double']}
     class:bottom={$$props['bottom']}
></div>

<style>
    .dog {
        position: absolute;
    }

    .dog.bottom {
        bottom: 0;
    }

    .dog.sniff {
        width: 125px;
        height: 130px;

        background-image: url('../../assets/game/dog/sniff/sprite.png');
        background-repeat: no-repeat;
        background-position: 0 -10px;
        padding-right: 10px;
        animation: walk 0.5s steps(5) infinite;
        z-index: 50;
        left: 45%;
    }

    @keyframes walk {
        100% {
            background-position: -725px -10px;
        }
    }

    .dog.single,
    .dog.double {
        width: 137px;
        height: 113px;
        background-image: url('../../assets/game/dog/single/0.png');
        background-repeat: no-repeat;
        transform: translateY(-100%);
        animation: singleShow 2s ease-in-out 2s infinite;
        z-index: 10;
        left: 50%;
    }

    .dog.double {
        left: 55%;
        background-image: url('../../assets/game/dog/double/0.png');
    }

    @keyframes singleShow {
        0% {
            transform: translateY(-100%);
        }
        50% {
            transform: translateY(100%);
        }
        90% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(-100%);
        }
    }
</style>
