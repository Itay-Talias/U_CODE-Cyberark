"use strict";
// interface Club {
//     openDoor(partyPerson: PartyPerson): void;
// }
// class PublicClub implements Club {
//     openDoor(partyPerson: PartyPerson): void {
//         console.log("Welcome!");
//     }
// }
// class ClubWithBouncer implements Club {
//     private publicClub: PublicClub = new PublicClub();
//     openDoor(partyPerson: PartyPerson): void {
//         if (partyPerson.getAge() >= 21) {
//             this.publicClub.openDoor(partyPerson);
//         } else {
//             console.log("Not allowed");
//         }
//     }
// }
// const tooYoung: PartyPerson = new PartyPerson(20);
// const old: PartyPerson = new PartyPerson(30);
// const publicClub: PublicClub = new PublicClub();
// console.log("Public club:");
// publicClub.openDoor(tooYoung);
// publicClub.openDoor(old);
// const clubWithBouncer: ClubWithBouncer = new ClubWithBouncer();
// console.log("Club with bouncer:");
// clubWithBouncer.openDoor(tooYoung);
// clubWithBouncer.openDoor(old);
