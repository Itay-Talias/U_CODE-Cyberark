class Singleton {
    private static instance: Singleton;
    private notes: string[];

    private constructor() {
        this.notes = ["do", "re", "me", "fa", "sol", "la", "si"];
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public getNotes(count: number): string[] {
        return this.notes.slice(0, count);
    }
}

const notes: string[] = Singleton.getInstance().getNotes(3);
console.log(notes);
