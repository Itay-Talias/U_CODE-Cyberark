class ControllerModel {
    private dataOfplayerArr: DataModel;
    constructor() {
        this.dataOfplayerArr = new DataModel();
    }
    public AddListenersToHTML() {
        this.addOnClickToGetPlayers();
        this.addRemoveStatsLisener();
    }
    private addOnClickToLeftRightButtons() {
        $(".players").on("click", ".btn-left", () => {});
        $(".players").on("click", ".btn-right", () => {});
    }
    private addOnClickToGetPlayers() {
        $("#getTeam-btn").on("click", () => {});
    }
    private addRemoveStatsLisener() {
        $(".players").on("mouseleave", ".player-card", function () {});
    }
}
