<script>
    export let url = null
    export let title = null

    $: badgeStyle = `background-image: url(${url})`
</script>

<span
    class="badge"
    style={badgeStyle}
    title={title}></span>

<style>
    .badge {
        height: 20px;
        width: 120px;
        display: inline-block;
        vertical-align: top;
    }
</style>
