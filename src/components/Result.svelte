<script>
    let title;
    let description;
    
    const onResultClick = () => {

    }
</script>

<div class="result" on:click={onResultClick}>
    <slot title={title} description={description}></slot>
</div>

<style>
    .result {
        border-top: 1px solid black;
        max-height: 80px;
        overflow: hidden
    }

    .result:hover {
        background: #b8b1b0;
        cursor: pointer;
    }
</style>