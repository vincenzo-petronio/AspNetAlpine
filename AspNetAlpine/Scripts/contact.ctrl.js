function contactsCtrl() {
    return {
        formModel: {},
        contactsType: [],

        onSendButtonClicked: function () {
            console.log(JSON.stringify(this.formModel));
        },

        setContactsType: async function () {
            return fetch('http://' + window.location.host + '/api/contact/type')
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((response) => {
                    //console.log(response);
                    this.contactsType = response;
                })
                .catch((ex) => {
                    console.log(ex);
                });
        }
    }
}