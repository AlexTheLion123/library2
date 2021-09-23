<script>
    let title;
    let description;
    
    const onResultClick = () => {

    }
</script>

<div class="result" on:click={onResultClick}>
    <slot name="title">Unknown title</slot>
    <slot name="description">Unknown description</slot>
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