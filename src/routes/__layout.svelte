<nav>
    <h2>Alex's Library</h2>
</nav>

<slot></slot>

<style>
    :global(html) {
        min-height: 100%;
        margin: 0;
        padding: 0;
    }
    :global(body) {
        background: #402d10;
        margin: 0;
        padding: 0;
        min-height: 100vh;
    }

    nav {
        background: #c9b4a7;
        height: 50px;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>