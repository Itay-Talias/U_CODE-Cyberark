import json


with open('nyc_jobs.json') as f:
    jobs = json.load(f)

# ex1


def find_jobs_by_word(word):
    return [job for job in jobs if word in job.get("job_description")]


print(len(find_jobs_by_word("experience")))

# ex2


def find_junior_jobs():
    return set([job.get("agency") for job in jobs if job.get("career_level") == "Entry-Level"])


def find_Broadway_jobs():
    return set([job.get("agency") for job in jobs if "Broadway" in job.get("work_location")])


print(find_junior_jobs() & find_Broadway_jobs())


# ex3

def get_salary_hourly_not_entry_level():
    return set([job.get("salary_range_to") for job in jobs if job.get("salary_frequency") == "Hourly" and job.get("career_level") != "Entry-Level"])


print(max(get_salary_hourly_not_entry_level()))

# ex4


salary_min = 17
salary_max = 18
agencies_in_range = [job["agency"] for job in jobs if float(job.get(
    "salary_range_from")) >= salary_min and float(job.get("salary_range_to")) <= salary_max]
print(set(agencies_in_range))
