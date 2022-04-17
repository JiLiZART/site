<div class="panel">
    <slot></slot>
</div>

<style>
    .panel {
        font-family: "Arcade", monospace;
        line-height: 0.6;
        font-size: calc(1.125rem * 2);
        color: white;
        min-height: calc(46px * 2);
        display: flex;
        padding: calc(4px * 2);
        border: calc(2px * 2) solid #9beb00;
        border-radius: calc(6px * 2);
        background: black;
    }
</style>
