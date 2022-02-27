function commentsCtrl() {
    return {
        comments: [],
        showDetails: false,
        selectedComment: {},

        setList: async function () {
            return fetch('https://jsonplaceholder.typicode.com/comments')
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((response) => {
                    console.log(response);
                    this.comments = response;
                })
                .catch((ex) => {
                    console.log(ex);
                });
        },

        setSelectedComment: async function (id) {
            return fetch('https://jsonplaceholder.typicode.com/comments/' + id)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((response) => {
                    console.log(response);
                    this.selectedComment = response;
                })
                .catch((ex) => {
                    console.log(ex);
                });
        },

        showDetailsPanel: async function (id) {
            console.log(id);
            this.showDetails = true;
            await this.setSelectedComment(id); 
        }
    }
}