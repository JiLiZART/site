<script>
    let hex = ''
    let rgb = ''

    let isDark = false
    let isLight = true;

    function toBodyStyle(value) {
        if (value || value === null) {
            document.body.style.backgroundColor = value
        }
    }

    function toRGB(hex) {
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

        console.log('toRGB', r, g, b);

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            return ''
        }

        return `rgb(${r}, ${g}, ${b})`;
    }

    function cToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function toHEX(rgb) {
        const rgb_RE = /^rgba?\((.*)\);?$/
        const digit_RE = /(\d+),(\d+),(\d+)/

        if (!rgb) {
            return ''
        }

        rgb = rgb.replace(' ', '').replace(rgb_RE, '$1')

        if (rgb.length !== 11) {
            return ''
        }

        if (!digit_RE.test(rgb)) {
            return ''
        }

        const [r,g,b] = rgb.split(',').map(num => parseInt(num, 10))

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            return ''
        }

        return `#${cToHex(r)}${cToHex(g)}${cToHex(b)}`
    }

    function onHex(e) {
        const value = e.target.value

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

    function onRgb(e) {
        const value = e.target.value

        if (value) {
            const result = toHEX(value)

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
</script>

<main class="container">
    <section class="colors" class:dark={isDark} class:light={isLight}>
        <input autofocus name="hex" type="text" placeholder="hex" autocomplete="false" pattern="[0-9a-fA-F]+" on:input={onHex} bind:value={hex} />
        <input name="rgb" type="text" placeholder="rgb" autocomplete="false" on:input={onRgb} bind:value={rgb} />
    </section>

</main>

<style>
    .container {
        width: 100%;
        height: calc(100vh - 122px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .colors input {
        display: block;
        width: 335px;
        font-size: 34px;
        line-height: 44px;
        background: 0 0;
        border: none;
        border-bottom: 1px dotted rgba(0,0,0,.4);
        padding: 5px 0;
        border-radius: 0;
        font-weight: 300;
    }

    .colors input:focus {
        outline: none;
        border-bottom-color: currentColor;
    }

    .light input {
        color: black;
        border-bottom-color: rgba(0,0,0,.4);
    }

    .dark input {
        color: white;
        border-bottom-color: rgba(255,255,255,.4);
    }
</style>
