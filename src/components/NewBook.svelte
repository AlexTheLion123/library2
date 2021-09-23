<script>
    import Form from '../components/Form.svelte'
    let showForm=true;


    //debugging below
    // import { onMount } from 'svelte';
    // onMount(() => {
    //     const newBookie = document.querySelector('.newBook');
    //     newBookie.addEventListener('click',e => console.log(newBookie))
    // })


</script>

<div 
    class="newBook"
    on:click={()=>{
        showForm = !showForm;
    }}
>
    <div class="plus-sign">+</div>
</div>

<Form bind:showForm/>



<style>
    .newBook {
        border: 1px solid black;
        background: grey;
        width: 300px;
        height: 400px;
        box-shadow: 0 0 2px black;

        display: grid;
        place-items: center;

        transition: all 1s ease;
    }

    .newBook:hover {
        transform: scale(1.1)
    }

    .plus-sign {
        color: white;
        font-size: 100px;
        background: grey;

        transition: all 3s ease;
    }

    

</style>







