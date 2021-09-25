<script>
    import { library } from '../lib/stores'
    let isRead;
</script>

{#each $library as book}
    <div class="book">
        <div class="book-header">{book.title}</div>
        <div class="description">{book.description}</div>
        <div class="previewlink">Preview-link<br><a href={book.previewLink}>{book.previewLink}</a></div>
        <div class="book-footer">
            <div class="isRead">
                <input type="radio" value={true} bind:group={book.isRead}>True
                <input type="radio" value={false} bind:group={book.isRead}>False
            </div>
            <div class="pages">Pages: {book.pageCount}</div>
        </div>
    </div>
{/each}

<style>
    .book-footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .book > div {
        padding: 10px;
    }

    .book {
        border: 1px solid black;
        background: #d4d4d4;
        width: 600px;
        box-shadow: 0 0 5px black;
        
        display: flex;
        flex-direction: column;

        position: relative;
    }

    .book-header {
        width: 100%;
        background: #e3e3e3;
        top: 0;
        position: relative;
    }
</style>



