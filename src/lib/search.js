import {writable} from "svelte/store";

export default function book({title = "title", author ="author",pageCount = "pages",thumbnail ="thumbnail",previewLink = "preview", description = "description"}) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.thumbnail = thumbnail;
    this.previewLink = previewLink;
    this.description = description;
    
}
