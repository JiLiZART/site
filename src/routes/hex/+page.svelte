<script>
    import Snackbar from '../../components/Snackbar.svelte'

    let showSnakbar = false
    let snakbarText = ''

    let hex = ''
    let rgb = ''

    let isDark = false
    let isLight = true;

    const rgb_RE = /^rgba?\((.*)\);?$/
    const digit_RE = /(\d+),(\d+),(\d+)/

    const to_rgb_RE = /(\d{3})(?=\d)/g

    function toast(text) {
        showSnakbar = true
        snakbarText = text
        setTimeout(function(){
            showSnakbar = false
            snakbarText = ''
        }, 2000);
    }


    function toBodyStyle(value) {
        if (value || value === null) {
            document.body.style.backgroundColor = value
        }
    }

    function parseHex(hex) {
        if (!hex) {
            return ''
        }

        if (hex.startsWith('#')) {
            hex = hex.slice(1)
        }

        if (hex.length === 3){
            hex = hex.split('').map(code => `${code}${code}`).join('')
        }

        if (hex.length !== 6) {
            return ''
        }

        const aRgbHex = hex.match(/.{1,2}/g);
        const [r,g,b] = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            return ''
        }

        return [r,g,b]
    }

    function parseRGB(rgb) {

        if (!rgb) {
            return ''
        }

        rgb = rgb.replace(/\s+/g, '').replace(rgb_RE, '$1')

        if (!digit_RE.test(rgb)) {
            return ''
        }

        const [r,g,b] = rgb.split(',').map(num => parseInt(num, 10))

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            return ''
        }

        return [r,g,b]
    }

    function getLuma(r, g, b) {
        return (0.299 * r + 0.587 * g + 0.114 * b)
    }

    function toRGB(hex) {
        const rgb = parseHex(hex)

        if (!rgb) {
            return ''
        }

        const [r,g,b] = rgb

        return `rgb(${r}, ${g}, ${b})`;
    }

    function toHEX(rgb) {
        const hex = parseRGB(rgb)

        if (!hex) {
            return ''
        }

        const [r,g,b] = hex

        function cToHex(c) {
            const hex = c.toString(16);

            return hex.length === 1 ? "0" + hex : hex;
        }

        return `#${cToHex(r)}${cToHex(g)}${cToHex(b)}`
    }

    function applyHex(value) {
        if (value) {
            const result = toRGB(value)

            if (result) {
                rgb = result
                toBodyStyle(result)
            }
        }

        if (value.length === 0) {
            rgb = ''
            toBodyStyle(null)
        }
    }

    function onHex(e) {
        applyHex(e.target.value)
    }

    function onHexFocus(e) {

        e.target.setSelectionRange(0, e.target.value.length)
    }

    function onHexPaste(e) {
        e.preventDefault()
        const text = e.clipboardData.getData('text')

        hex = text.replace('#', '')

        console.log('hex paste', text, text.replace('#', ''), hex)

        applyHex(hex)
    }

    function onHexCopy(e) {
        const selection = document.getSelection();
        const selected = selection.toString().toUpperCase()

        e.clipboardData.setData("text/plain", `#${selected}`);

        e.preventDefault();

        toast(`Copied #${selected}`)
    }

    function onRgb(e) {
        const value = e.target.value

        if (value) {
            const result = toHEX(value)

            if (value.length) {
                hex = value.replace(to_rgb_RE, '$1,')
            }


            if (result) {
                hex = result
                toBodyStyle(result)
            }
        }

        if (value.length === 0) {
            hex = ''
            toBodyStyle(null)
        }
    }

    $: {
        let result = null

        if (hex) {
            result = parseHex(hex)
        }

        if (rgb) {
            result = parseRGB(rgb)
        }

        let luma = 150

        if (result) {
            luma = getLuma(...result)
        }

        isLight = luma >= 200
        isDark = luma <= 100
    }

</script>

<main class="container">
    <section class="colors" class:dark={isDark} class:light={isLight}>
        <div class="field">
            <div class="field__prefix field__prefix_hex">#</div>
            <input
                autoFocus
                name="hex"
                type="text"
                placeholder="hex"
                autocomplete="false"
                pattern="[0-9a-fA-F]+"
                maxlength="6"
                on:paste={onHexPaste}
                on:copy={onHexCopy}
                on:focus={onHexFocus}
                on:input={onHex}
                bind:value={hex}
            />
        </div>
        <div class="field">
            <div class="field__prefix field__prefix_rgb">rgba(</div>
            <input name="rgb" type="text" placeholder="rgb" autocomplete="false" on:input={onRgb} bind:value={rgb} />
            <div class="field__postfix">)</div>
        </div>
    </section>
</main>
<Snackbar show={showSnakbar}>
    {snakbarText}
</Snackbar>

<style>
    .container {
        width: 100%;
        height: calc(100vh - 122px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .field {
        display: flex;
        flex-direction: row;
        gap: 4px;

        font-size: 34px;
        font-weight: 300;
        line-height: 44px;
        border-bottom: 1px dotted rgba(0,0,0,.4);
        padding: 4px 0;
        transition: border 1s ease;
    }

    .field input {
        display: block;
        font-size: 34px;
        font-weight: 300;
        line-height: 44px;
        background: 0 0;
        border: none;
        border-radius: 0;
    }

    .field input:focus-visible,
    .field input:focus {
        outline: none;
        box-shadow: none;
        border-bottom-color: currentColor;
    }

    .field__prefix_hex {
        margin-left: -28px;
    }

    .field__prefix_rgb {
        margin-left: -82px;
    }

    .light .field {
        color: black;
        border-bottom-color: rgba(0,0,0,.4);
    }

    .dark .field {
        color: white;
        border-bottom-color: rgba(255,255,255,.4);
    }
</style>
