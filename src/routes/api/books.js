export const post = (request) => {
	const title = request.body.get("title")
	const author = request.body.get("author")
    const pages = request.body.get("pages");
    const isRead = request.body.get("isRead");

	return {
		body: {
			entry1: {title: "Pride and Prejiduce",
			author: "Jane Austen",
			pages: 350,
			read: true}
		}
	}
}
