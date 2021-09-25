import {writable} from "svelte/store";
import { browser } from "$app/env";


export const library = writable(browser && (JSON.parse(localStorage.getItem("library")) || []));
library.subscribe(value => browser && localStorage.setItem("library", JSON.stringify(value)))


// library.subscribe(value => localStorage.content = (value))

export function Book({title, authors, pageCount,thumbnail,previewLink, description}) {
    this.title = title;
    this.author = authors[0];
    this.pageCount = pageCount;
    this.thumbnail = thumbnail;
    this.previewLink = previewLink;
    this.description = description;
    this.isRead = false;
}



