"use strict";
class JobPosition {
    constructor(builder) {
        this.publishedDate = builder.publishedDate;
        this.title = builder.title;
        this.isRemote = builder.isRemote;
        this.location = builder.location;
        this.salaryCap = builder.salaryCap;
        this.description = builder.description;
        this.yearsOfExperienceRequired = builder.yearsOfExperienceRequired;
    }
}
JobPosition.Builder = class {
    constructor(publishedDate, title, isRemote) {
        //Optional Parameters (with defaults)
        this.location = "Tel Aviv";
        this.salaryCap = 10000;
        this.description = "";
        this.yearsOfExperienceRequired = 0;
        this.publishedDate = publishedDate;
        this.title = title;
        this.isRemote = isRemote;
    }
    setLocation(location) {
        this.location = location;
        return this;
    }
    setSalaryCap(salaryCap) {
        this.salaryCap = salaryCap;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setYearsOfExperienceRequired(yearsOfExperienceRequired) {
        this.yearsOfExperienceRequired = yearsOfExperienceRequired;
        return this;
    }
    build() {
        return new JobPosition(this);
    }
};
const job = new JobPosition.Builder("21/11/2022", "Software engineer", true)
    .setDescription("good job!")
    .setLocation("Holon")
    .setSalaryCap(20000)
    .build();
console.log(job);
