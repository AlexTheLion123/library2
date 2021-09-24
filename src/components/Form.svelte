<script>
    import book from '../lib/search';
    import Result from './Result.svelte';

    export let showForm;
    let results;
    let valid = true;
    let loading = false;
    let promise;

    async function getResults(e) {

            if(results){
                results = undefined;
            }

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
            
            promise = fetchData(url)
                        .then(res => {
                            if(res.totalItems == 0){
                                valid = false;
                                alert("Invalid search terms")
                                return results;
                            }
            
                            //res = JSON.parse(res).items;
                            const data = res.items           
                            results = data.map(obj => obj.volumeInfo).map(
                                ({title,authors,pageCount,imageLinks: {thumbnail},previewLink, description}) => 
                                ({title,authors,pageCount,thumbnail,previewLink, description}))
                            return results;
                        })

        async function fetchData(url) {
            const res = await fetch(url);
            return res.json();
        }
            
    }

    function resultClickHandler(e) { // event delegation 
        const container = this;
        
        let parent = e.target.parentElement;
        while(parent != container){ // avoids infinite loop
            if(parent.classList.contains("result")){ // gets the individual result object
                break;
            }
            parent = parent.parentNode;
        }
        const specificResult = parent;

        const children = parent.children
        
        // get index of results
        let index = 0;
        while(parent.previousElementSibling){
            parent = parent.previousElementSibling
            index++;
        }

        // the above code is all technically unecessary, could've just got the index from the searchCount, or even attach listeners to each results (although this does not delegate events)

        return results[index]
    }

    function divclick(e) {
        console.log(e.target);
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
                {#await promise}
                    <div>Loading...</div>
                {/await}
            </div>
        </div>

        {#if results}
            <div class="results" on:click={resultClickHandler}>
                {#each results as result, i}
                    <Result>
                        <svelte:fragment slot="title">
                            <h3 id="title">{result.title}</h3><h4 id="authors">{result.authors}</h4>
                        </svelte:fragment>
                        <p id="description" slot="description">{result.description}</p>
                        <h5 id="page" slot="pageCount">Pages: {result.pageCount}</h5>
                        <h5 id="searchCount" slot="searchCount">{i+1}</h5>
                    </Result>
                {/each}
            </div>
        {/if}
    </form>

    
</div>



<style>
    #searchCount {
        float: right;
    }

    h3, h4 {
        display: inline-block;
        margin: 10px;
    }

    #authors {
        float: right;
    }

    .result-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }

    h5, p {
        margin: -5px 10px 10px;
    }

    h5 {
        display: inline;
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

        display: flex;
        justify-content: center;

        background: rgba(0, 0, 0, .7); 
    }

    form {
        background: grey;
        border-radius: 10px;
        overflow: hidden;
        width: 80%;

        position: absolute;
        top: 150px;
        
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