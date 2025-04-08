const baseUrl ="https://anbo-restbookquerystring.azurewebsites.net/api/books"

Vue.createApp({
    data() {
        return {
            books: [],
            idToGetBy: -1,
            singleBook: null,
            deleteId:-1,
            deleteMessage: "",
            addBookData: {id: 0, title: "", price: 0 },
            addBookMessage: "",
            updateBookData: {id: 0, title: "", price: 0 },
            updateBookMessage: "",
        }
    },
    methods: {
        getAllBooks(){
            this.getBooks(baseUrl);
        },
        async getBooks(url){
            try {
                const response= await axios.get(url);
                this.books = await response.data;
            } catch (ex){
                alert(ex.message);
            }
        },
        async getBookById(id){
            const url = baseUrl + "/" + id;
            try{
                const response = await axios.get(url);
                this.singleBook = await response.data;
            } catch (ex){
                alert(ex.message);
            }
        },
        async deleteBook(deleteId){
            const url = baseUrl + "/" + deleteId;
            try{
                response = await axios.delete(url);
                this.deleteMessage = response.status + " " + response.statusText;
                this.getAllBooks();
            } catch (ex){
                alert(ex.message);
            }           
        },
        async addBook(){
            try{
                response = await axios.post(baseUrl, this.addBookData);
                this.addBookMessage = "response " + response.status + " " + response.statusText;
                this.getAllBooks();
            } catch (ex){
                alert(ex.message);
            }
        },
        async updateBook(){
            const url = baseUrl + "/" + this.updateBookData.id;
            try{
                response = await axios.put(url, this.updateBookData);
                this.updateMessage = "response " + responce.status + " " + response.statusText;
                this.getAllBooks();
            } catch (ex){
                alert(ex.message);
            }
        },
    },
}).mount('#app')
