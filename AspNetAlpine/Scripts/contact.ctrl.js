function contactsCtrl() {
    return {
        formModel: {},
        contactsType: [],

        onSendButtonClicked: function () {
            console.log(JSON.stringify(this.formModel));
            this.postContact(this.formModel);
        },

        setContactsType: async function () {
            await fetch('http://' + window.location.host + '/api/contact/type')
                //console.log(response);
                //const data = await response.json();
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((response) => {
                    //console.log(response);
                    this.contactsType = response;
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        postContact: async function (data) {
            await fetch('http://' + window.location.host + '/api/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                //.then(response => response.json())
                //.then(data => {
                //    console.log('Success:', data);
                //})
                .catch((error) => {
                    console.error('Error:', error);
                });
        },

        getContacts: function () { },
    }
}