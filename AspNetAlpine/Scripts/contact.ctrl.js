function contactsCtrl() {
    return {
        formModel: {},

        onSendButtonClicked: function () {
            console.log(JSON.stringify(this.formModel));
        }
    }
}