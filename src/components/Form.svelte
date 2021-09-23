<script>
    import book from '../lib/search';
    import Result from './Result.svelte';

    export let showForm;
    let results;
    let valid = true;

    async function getResults(e) {
            //get form data
            const fd = new FormData(this);
            const {searchBar} = Object.fromEntries([...fd]);


            if(!searchBar) {
                valid = false;
                alert("You have not entered any search terms")
                return;
            } else {
                valid = true;
            }

            // get search results 
            const url = `https://www.googleapis.com/books/v1/volumes/?q=${searchBar}`
            const res = await fetch(url)
            let data = await res.json();
            
            if(data.totalItems == 0){
                valid = false;
                alert("Invalid search terms")
                return;
            }
            
            //res = JSON.parse(res).items;
            data = data.items           
            results = data.map(obj => obj.volumeInfo).map(
                ({title,authors,pageCount,imageLinks: {thumbnail},previewLink, description}) => 
                ({title,authors,pageCount,thumbnail,previewLink, description}))

            return results;
    }

    function resultClickHandler(e) {
        const chosen = this;
        console.log(chosen);
    }

</script>


<div class="form-popup-wrap" class:modal-form={showForm==true} >
    <form 
        on:submit|preventDefault={getResults} 
    >
        <div class="form-exit">
            <div 
                class="form-exit-button" 
                on:click={()=>{
                    showForm = !showForm;
                }}
            ></div>
        </div>

        <div class="form-content">
            <div class="searchBar">
                <label for="search-input"></label>
                <input type="text" name="searchBar" id="search-input">
                <button type="submit" id="submit-button">Submit</button>

            </div>
            
        </div>

        {#if results}
            <div class="results">
                {#each results as result}
                    <Result on:click={resultClickHandler}>
                        <div class="result-heading" slot="title"><h3>{result.title}</h3><h4>{result.authors}</h4></div>
                        <p slot="description">{result.description}</p>
                        <h5 slot="pageCount">Pages: {result.pageCount}</h5>
                    </Result>
                {/each}
            </div>
        {/if}
    </form>

    
</div>



<style>
    .result-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 10px;
    }

    h5, p {
        margin: -5px 10px 10px;
    }

    .results{
        background: grey;
        font-size: small;
    }

    .searchBar {
        padding: 50px;
    }

    #search-input {
        padding: 10px;
        width: 400px;
    }

    .form-popup-wrap {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 9999;
        top: 0;
        left: 0;

        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, .7); 
    }

    form {
        background: grey;
        border-radius: 10px;
        overflow: hidden;
        width: 80%;
        
        max-height: 700px;
        overflow: auto;

    }

    .form-exit {
        width: 100%;
        top: 0;
        height: 30px;
        background: rgba(196, 199, 204, 0.2);

        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .form-exit-button {
        width: 25px;
        height: 25px;
        right: 50px;
    }

    .form-exit-button::before {
        top: 11px;
        position: relative;
        display: block;
        width: 20px;
        height: 2px;
        content: "";
        border-radius: 2px;
        background: white;
        transform: rotate(45deg);
    }

    .form-exit-button:hover::before {
        transform: rotate(45deg) scale(1.2);
    }
    .form-exit-button:hover::after {
        transform: rotate(-45deg) scale(1.2);
    }

    .form-exit-button::after {
        top: 10px;
        position: relative;
        display: block;
        width: 20px;
        height: 2px;
        content: "";
        border-radius: 2px;
        background: white;
        transform: rotate(-45deg)
    }

    .form-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-form {
        display: none;
    }

    label:not(.pages-label) {
        display: none;
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