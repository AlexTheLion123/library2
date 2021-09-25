<script context="module">
    // export const load = async ({fetch}) => {
    //     const res = await fetch("./api/posts")
    //     const data = await res.json()
    //     return {
    //         props: {
    //             data,
    //         }
    //     }
    // }
    import { BOOKS_KEY } from '../lib/Env'; // google books api key
    
</script>

<script>
    import Book from '../components/Book.svelte'
    import NewBook from '../components/NewBook.svelte';
</script>



<div class="book-container">
    <div class="book-wrapper">
        <Book/>
        <NewBook/>
    </div>
</div>


<style>
    .book-container {
        max-width: 1200px;
        margin: auto;
    }


    .book-wrapper {
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
    }

</style>