"use strict";
class ExportingJSON {
    visitUser(user) {
        return `{
            id: ${user.id},
            name: ${user.name},
            password: ${user.password}
        }`;
    }
    visitAsset(asset) {
        return `{
            serialNumber: ${asset.serialNumber},
            owner: ${asset.owner},
            rating: ${asset.rating}
        }`;
    }
    visitGroup(group) {
        return `{
            id: ${group.id},
            size: ${group.size},
        }`;
    }
}
class User {
    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    accept(visitor) {
        return visitor.visitUser(this);
    }
}
class Asset {
    constructor(serialNumber, owner, rating) {
        this.serialNumber = serialNumber;
        this.owner = owner;
        this.rating = rating;
    }
    accept(visitor) {
        return visitor.visitAsset(this);
    }
}
class Group {
    constructor(id, size) {
        this.id = id;
        this.size = size;
    }
    accept(visitor) {
        return visitor.visitGroup(this);
    }
}
const details = [];
details.push(new User(1, "Itay", "123456"));
details.push(new User(2, "Dekal", "987654"));
details.push(new User(3, "Ohad", "456987"));
details.push(new Asset(4, "Itay", 5));
details.push(new Asset(5, "Dekel", 10));
details.push(new Group(6, 100));
details.push(new Group(7, 200));
const exportingJSON = new ExportingJSON();
for (const detailed of details) {
    console.log(detailed.accept(exportingJSON));
}
