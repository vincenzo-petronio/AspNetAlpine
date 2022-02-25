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

        showDetailsPanel: function (e) {
            console.log(e.target);
            this.showDetails = !this.showDetails;
        }
    }
}