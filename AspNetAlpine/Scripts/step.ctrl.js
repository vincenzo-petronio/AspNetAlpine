function stepCtrl() {
    return {
        stepId: 0,
        message: 'step controller message',
        progress: 0,
        data: {},

        OnBackButtonClicked: function () {
            this.stepId--;
            setTimeout(async () => {
                let html = await this.getStepPage();
                document.getElementById("id_content").innerHTML = html;
            }, 0);
        },

        OnNextButtonClicked: function () {
            this.stepId++;
            setTimeout(async () => {
                let html = await this.getStepPage();
                document.getElementById("id_content").innerHTML = html;
            }, 0);
        },

        getStepPage: async function () {
            let response = await fetch('http://' + window.location.host + '/step/next' + '?stepId=' + this.stepId)
            let data = await response.text();
            return data;
        },

        OnSubmitButtonClicked: function () {
            //$event.preventDefault();
            console.log(JSON.stringify(this.data));
        }
    }
}