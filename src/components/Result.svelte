<script>
    let title;
    let description;
    let pages;
    let thumbnnail;

    const onResultClick = () => {

    }
</script>

<div class="result" on:click>
    <slot name="title"></slot>
    <slot name="description"></slot>
    <slot name="pageCount"></slot>
</div>

<style>
    
    .result {
        border-top: 1px solid black;
        overflow: hidden
    }

    .result:hover {
        background: #b8b1b0;
        cursor: pointer;
    }
</style>