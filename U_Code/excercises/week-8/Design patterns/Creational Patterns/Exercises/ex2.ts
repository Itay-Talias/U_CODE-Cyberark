class JobPosition {
    private publishedDate: string;
    private title: string;
    private isRemote: boolean;
    private location: string;
    private salaryCap: number;
    private description: string;
    private yearsOfExperienceRequired: number;

    public static Builder = class {
        //Required Parameters
        private publishedDate: string;
        private title: string;
        private isRemote: boolean;

        //Optional Parameters (with defaults)
        private location: string = "Tel Aviv";
        private salaryCap: number = 10000;
        private description: string = "";
        private yearsOfExperienceRequired: number = 0;

        constructor(publishedDate: string, title: string, isRemote: boolean) {
            this.publishedDate = publishedDate;
            this.title = title;
            this.isRemote = isRemote;
        }

        setLocation(location: string) {
            this.location = location;
            return this;
        }

        setSalaryCap(salaryCap: number) {
            this.salaryCap = salaryCap;
            return this;
        }

        setDescription(description: string) {
            this.description = description;
            return this;
        }

        setYearsOfExperienceRequired(yearsOfExperienceRequired: number) {
            this.yearsOfExperienceRequired = yearsOfExperienceRequired;
            return this;
        }

        build(): JobPosition {
            return new JobPosition(this);
        }
    };

    private constructor(builder: any) {
        this.publishedDate = builder.publishedDate;
        this.title = builder.title;
        this.isRemote = builder.isRemote;
        this.location = builder.location;
        this.salaryCap = builder.salaryCap;
        this.description = builder.description;
        this.yearsOfExperienceRequired = builder.yearsOfExperienceRequired;
    }
}

const job = new JobPosition.Builder("21/11/2022", "Software engineer", true)
    .setDescription("good job!")
    .setLocation("Holon")
    .setSalaryCap(20000)
    .build();

console.log(job);
