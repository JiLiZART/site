<script >
    let className = '';

    export { className as class };
</script>

<div {...$$props} class="techs-logos {className}" aria-label="Спсисок технологий которые знаю" role="list" tab-index="">
    <span class="techs-logos__icon techs-logos__icon_js" role="listitem" title="Javascript"></span>
    <span class="techs-logos__icon techs-logos__icon_ts" role="listitem" title="Typescript"></span>
    <span class="techs-logos__icon techs-logos__icon_node" role="listitem" title="Node.js"></span>
    <span class="techs-logos__icon techs-logos__icon_react" role="listitem" title="React"></span>
    <span class="techs-logos__icon techs-logos__icon_vue" role="listitem" title="Vue.js"></span>
    <span class="techs-logos__icon techs-logos__icon_svelte" role="listitem" title="Svelte"></span>
    <span class="techs-logos__icon techs-logos__icon_webpack" role="listitem" title="Webpack 3"></span>
    <span class="techs-logos__icon techs-logos__icon_ng4" role="listitem" title="Angular 4"></span>
    <span class="techs-logos__icon techs-logos__icon_html5" role="listitem" title="HTML5"></span>
    <span class="techs-logos__icon techs-logos__icon_css3" role="listitem" title="CSS3"></span>
    <span class="techs-logos__icon techs-logos__icon_stylus" role="listitem" title="Stylus"></span>
    <span class="techs-logos__icon techs-logos__icon_less" role="listitem" title="Less"></span>
    <span class="techs-logos__icon techs-logos__icon_sass" role="listitem" title="Sass"></span>
    <span class="techs-logos__icon techs-logos__icon_php" role="listitem" title="PHP 5/7"></span>
    <span class="techs-logos__icon techs-logos__icon_yii" role="listitem" title="Yii2"></span>
    <span class="techs-logos__icon techs-logos__icon_gulp" role="listitem" title="Gulp"></span>
    <span class="techs-logos__icon techs-logos__icon_bem" role="listitem" title="BEM"></span>
    <span class="techs-logos__icon techs-logos__icon_jquery" role="listitem" title="jQuery"></span>
</div>

<style>
    .techs-logos {
        /*margin-top: 1rem;*/
        /*margin-bottom: 1rem;*/
    }

    .techs-logos__icon {
        display: inline-block;
        vertical-align: top;
        width: 2rem;
        height: 2rem;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 100% 100%;
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
    .techs-logos__icon_js {
        background-image: url("../assets/techs/js.svg");
    }
    .techs-logos__icon_ts {
        background-image: url("../assets/techs/ts.svg");
    }
    .techs-logos__icon_node {
        background-image: url("../assets/techs/nodejs.svg");
    }
    .techs-logos__icon_react {
        background-image: url("../assets/techs/react.svg");
    }
    .techs-logos__icon_vue {
        background-image: url("../assets/techs/vue.svg");
    }
    .techs-logos__icon_svelte {
        background-image: url("../assets/techs/svelte.svg");
    }
    .techs-logos__icon_ng4 {
        background-image: url("../assets/techs/ng4.svg");
    }
    .techs-logos__icon_bem {
        background-image: url("../assets/techs/bem.svg");
    }
    .techs-logos__icon_html5 {
        background-image: url("../assets/techs/html5.svg");
    }
    .techs-logos__icon_css3 {
        background-image: url("../assets/techs/css3.svg");
    }
    .techs-logos__icon_stylus {
        background-image: url("../assets/techs/stylus.svg");
    }
    .techs-logos__icon_less {
        background-image: url("../assets/techs/less.svg");
    }
    .techs-logos__icon_sass {
        background-image: url("../assets/techs/sass.svg");
    }
    .techs-logos__icon_php {
        background-image: url("../assets/techs/php.svg");
    }
    .techs-logos__icon_yii {
        background-image: url("../assets/techs/yii.svg");
    }
    .techs-logos__icon_gulp {
        background-image: url("../assets/techs/gulp.svg");
    }
    .techs-logos__icon_webpack {
        background-image: url("../assets/techs/webpack.svg");
    }
    .techs-logos__icon_jquery {
        background-image: url("../assets/techs/jquery.svg");
    }
</style>
