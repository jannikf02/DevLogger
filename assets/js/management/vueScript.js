var app = new Vue({
    el: '#app',
    data: {
        milestones: [
            { id: 1, version: "0.1", name: "Meileinstein 1", isOpen: true },
            { id: 2, version: "0.1a", name: "Meileinstein 2", isOpen: true },
            { id: 3, version: "0.2", name: "Meileinstein 3", isOpen: true }
        ],
        cards: [
            { id: 1, title: "Aufgabe 1", description: "Description goes here and is extra long so that long descriptions will also be visible and displayed correctly", milestoneId: 1 },
            { id: 2, title: "Aufgabe 2", description: "Description goes here", milestoneId: 1 },
            { id: 3, title: "Aufgabe 3", description: "Description goes here", milestoneId: 1 },
            { id: 4, title: "Aufgabe 4", description: "Description goes here", milestoneId: 1 }
        ],
        subTasks: [
            { id: 1, title: "Subtask 1", cardId: 1, status: 0 },
            { id: 2, title: "Subtask 2", cardId: 1, status: 1 },
            { id: 3, title: "Subtask 3", cardId: 1, status: 2 },
            { id: 4, title: "Subtask 1", cardId: 2, status: 1 },
            { id: 5, title: "Subtask 1", cardId: 3, status: 1 },
            { id: 6, title: "Subtask 1", cardId: 4, status: 2 }
        ]
    },
    methods: {
        getCardsByMilestoneId: function (milestoneId) {
            return this.cards.filter(card => card.milestoneId == milestoneId);
        },
        getSubTasksByCardId: function (cardId) {
            return this.subTasks.filter(subTask => subTask.cardId == cardId);
        },
        getClassByStatus: function (status) {
            switch (status) {
                case 0:
                    return "notStarted";
                case 1:
                    return "inProgress";
                case 2:
                    return "done";
            }
        },
        getStatustextByStatus: function (status) {
            switch (status) {
                case 0:
                    return "Nicht gestartet";
                case 1:
                    return "In Bearbeitung";
                case 2:
                    return "Fertig";
            }
        },
        toggleMilestone(milestone) {
            milestone.isOpen = !milestone.isOpen;
        },
        getPercentCompleteByCardId: function (cardId) {
            var subTasks = this.getSubTasksByCardId(cardId);
            var doneSubTasks = subTasks.filter(subTask => subTask.status == 2);
            return Math.round((doneSubTasks.length / subTasks.length) * 100);
        }
    }
})