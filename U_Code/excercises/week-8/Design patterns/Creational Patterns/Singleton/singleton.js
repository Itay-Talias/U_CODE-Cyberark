"use strict";
class Singleton {
    constructor() {
        this.notes = ["do", "re", "me", "fa", "sol", "la", "si"];
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    getNotes(count) {
        return this.notes.slice(0, count);
    }
}
const notes = Singleton.getInstance().getNotes(3);
console.log(notes);
