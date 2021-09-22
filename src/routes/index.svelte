<!-- <script context="module">
    export const load = async ({fetch}) => {
        const res = await fetch("./api/posts")
        const data = await res.json()
        return {
            props: {
                data,
            }
        }
    }
</script> -->

<script>
    import newBook from '../components/newBook.svelte';

    let title;
    let author;
    let pages = 55; // give number of pages an initial number so not undefined
    let isRead;

    const submitHandler = () => {
        console.log(title); 
        console.log(author);
        console.log(pages);
        console.log(isRead);
    }

    let showForm = false;
</script>

<form on:submit|preventDefault={submitHandler} class:modal-form={!showForm}>
    <div class="form-container">
        <label for="title">Title: </label>
        <input class="textInput" type="text" id="title" placeholder="Enter title" name="title" bind:value={title}/>
        <label for="author">Author: </label>
        <input class="textInput" type="text" id="author" placeholder="Enter author" name="author" bind:value={author}/>
        
        <label for="pages" class="pages-label">
            <div id="page-number">{pages}</div>
            <input type=range min=10 max=1000 name="pages" bind:value={pages}/>
        </label> 
        
        
        <div class="buttons">
            <label for="yes">Yes</label>Yes<input type="radio" id="yes" name="isRead" value="yes" bind:group={isRead}>        
            <label for="no">Yes</label>No<input type="radio" id="no" name="isRead" value="no" bind:group={isRead}>
        </div>
        
        <input type="submit" value="Submit" id="submit-button">
    </div>

</form>

<style>
    * {
        box-sizing: border-box
    }

    form {
        background: grey;
        padding: 10px;
        width: 250px;
        border-radius: 10px;
        margin: 100px auto;

        box-shadow: 0 0 5px white;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-form {
        display: none;
    }

    .textInput {
        margin: 10px;
        padding: 10px
    }

    label:not(.pages-label) {
        display: none;
    }

    .pages-label {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    #page-number {
        background: lightblue;
        border: 1px solid black;
        padding: 10px;
        display: grid;
        place-items: center;
        margin: 10px;
    }

    .buttons {
        margin: 10px
    }

    #submit-button {
        margin: 10px;
        padding: 5px;
        border-radius: 5px;
    }

    #submit-button:hover {
        background: grey;
    }
</style>