country_populations = {}

country_populations["Ghana"] = 28
country_populations["Brazil"] = 209
country_populations["Mongolia"] = 3

country = "Brazil"

for key, val in country_populations.items():
    print(f"{key} is a big country") if val >= 50 else print(
        f"{key} is a small country")
