import requests
import json

r = requests.get("https://api.codementor.io/api/v2/users/mathiasgatti/reviews")
reviews = r.json()

while True:
	last_review_ts = reviews[-1]["created_at"]

	r = requests.get(f"https://api.codementor.io/api/v2/users/mathiasgatti/reviews?before_timestamp={last_review_ts}")
	new_reviews = r.json()
	if len(new_reviews) == 0:
		break
	reviews += new_reviews

with open('src/data/reviews.json','w') as f:
	json.dump(reviews,f)
