"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FetchDetailsFromAPI {
    static parsingJSONToPlayer(playersArr) {
        return playersArr.map((player) => {
            return {
                firstName: player.first_name,
                lastName: player.last_name,
                teamId: player.team_id,
                pos: player.position,
                jersey: player.jersey_number,
                birth: player.birth,
                isActive: player.is_active,
            };
        });
    }
    static POST(player) {
        return __awaiter(this, void 0, void 0, function* () {
            const DreamTeamArr = yield $.ajax({
                type: "POST",
                url: "./dream_team",
                data: JSON.stringify(player),
                contentType: "application/json",
                dataType: "json",
            });
            return this.parsingJSONToPlayer(DreamTeamArr);
        });
    }
    static DELETE(firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield $.ajax({
                type: "DELETE",
                url: "./dream_team",
                data: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                }),
                contentType: "application/json",
                dataType: "json",
            });
            return this.parsingJSONToPlayer(res);
        });
    }
    static GET(firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            const statsPlayer = yield $.get(`./player_stats/${lastName}/${firstName}`);
            return statsPlayer;
        });
    }
}
