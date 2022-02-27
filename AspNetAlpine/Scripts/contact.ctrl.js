function contactsCtrl() {
    const gridTable = new gridjs.Grid({
        columns: [
            { id: 'Type', name: 'Type' },
            { id: 'Text', name: 'Text' },
            { id: 'Option', name: 'Option' },
            { id: 'Enabled', name: 'Enable', formatter: (cell) => cell.toString() },
        ],
        data: []
    }).render(document.getElementById("id_grid"));

    //#region [X-DATA]
    return {
        formModel: {},
        contactsType: [],
        contacts: [],

        onSendButtonClicked: function () {
            console.log(JSON.stringify(this.formModel));
            this.postContact(this.formModel)
                .then(() => { this.setContacts(); });
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

        setContacts: async function () {
            await fetch('http://' + window.location.host + '/api/contact')
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((response) => {
                    console.log(response);
                    this.contacts = response;
                    //return true;
                })
                .then((response) => {
                    console.log('Set grid');
                    this.updateGridTable();
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        updateGridTable: function () {
            gridTable.updateConfig({
                data: this.contacts
            }).forceRender();
        }
    }
    //#endregion
}