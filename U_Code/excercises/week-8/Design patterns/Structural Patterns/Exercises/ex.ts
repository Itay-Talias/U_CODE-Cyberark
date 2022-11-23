class AJAXFacade {
    get(url: string) {
        const req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();
    }
}

const url = "https://reqres.in/api/users?page=2";

const a = new AJAXFacade();
console.log(a.get(url));
