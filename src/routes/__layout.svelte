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
        background: #fafafa;
        margin: 0;
        padding: 0;
        min-height: 100vh;
    }

    :global(*) {
        box-sizing: border-box
    }

    nav {
        background: #3b3831;
        height: 50px;
        color: white;
        border-bottom: 3px solid #5c594e;
        box-shadow: 0 0 10px 1px black;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>