"use strict";
class ControllerModel {
    constructor() {
        this.dataOfplayerArr = new DataModel();
    }
    AddListenersToHTML() {
        this.addOnClickToGetPlayers();
        this.addRemoveStatsLisener();
    }
    addOnClickToLeftRightButtons() {
        $(".players").on("click", ".btn-left", () => { });
        $(".players").on("click", ".btn-right", () => { });
    }
    addOnClickToGetPlayers() {
        $("#getTeam-btn").on("click", () => { });
    }
    addRemoveStatsLisener() {
        $(".players").on("mouseleave", ".player-card", function () { });
    }
}
