"use strict";
class ClothingStore {
    sell() {
        console.log("Selling clothes");
    }
}
class ToyStore {
    sell() {
        console.log("Selling toys");
    }
}
class FurnitureStore {
    sell() {
        console.log("Selling furniture");
    }
}
var StoreType;
(function (StoreType) {
    StoreType[StoreType["Cloths"] = 0] = "Cloths";
    StoreType[StoreType["Toys"] = 1] = "Toys";
    StoreType[StoreType["Furnitures"] = 2] = "Furnitures";
})(StoreType || (StoreType = {}));
class StoreFactory {
    createStore(type) {
        switch (type) {
            case StoreType.Cloths:
                return new ClothingStore();
            case StoreType.Toys:
                return new ToyStore();
            case StoreType.Furnitures:
                return new FurnitureStore();
        }
    }
}
const storeFactory = new StoreFactory();
const store1 = storeFactory.createStore(StoreType.Toys);
const store2 = storeFactory.createStore(StoreType.Cloths);
store1.sell();
store2.sell();
