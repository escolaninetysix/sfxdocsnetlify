import subprocess
import json
import requests

changed_paths = subprocess.Popen(
	'git diff-tree --no-commit-id --name-only -r d456082580498c65cf19ef73e231e6a9995389d3 `git show -s --format="%H" master`',
	stdout=subprocess.PIPE,
	shell=True
).communicate()[0].decode('utf8').split()

search_index = json.loads(open('public/index.json').read())

algolia_update_object = { 'requests': [] }

for path in changed_paths:
	if path.startswith('content/'):
		matchesSkip = False
		if path.startswith('content/category-list'):
			matchesSkip = True
		if path.startswith('content/channel'):
			matchesSkip = True
		if path.startswith('content/themedev'):
			matchesSkip = True
		if path.startswith('content/landing'):
			matchesSkip = True				
		if path.startswith('content/landingpages'):
			matchesSkip = True				
		if path.startswith('content/effects'):
			matchesSkip = True	
		if path.startswith('content/black-friday'):
			matchesSkip = True			
		if path.startswith('content/continuum-effects'):
			matchesSkip = True				
		if path.startswith('content/sapphire-effects'):
			matchesSkip = True			
		if path.startswith('content/nitrofx-examples'):
			matchesSkip = True		
		if path.startswith('content/particle-examples'):
			matchesSkip = True		
		if path.startswith('content/landingpages'):
			matchesSkip = True
		if path.startswith('content/host-compatibility'):
			matchesSkip = True
		if path.startswith('content/beta-downloads'):
			matchesSkip = True
		if path.startswith('content/partner'):
			matchesSkip = True
		if path.startswith('content/product-history'):
			matchesSkip = True		
		if path.startswith('content/fallgiveaway'):
			matchesSkip = True
		if path.startswith('content/api'):
			matchesSkip = True
		if path.startswith('content/affiliate'):
			matchesSkip = True
		if path.startswith('content/store/checkout'):
			matchesSkip = True
		if path.startswith('content/account'):
			matchesSkip = True
		if not matchesSkip:
			path = path.replace('content/', '')
			for item in search_index:
				if item['path'] == path:
					algolia_update_object['requests'].append({
						'action': 'updateObject',
						'body': item,
					})
					break
	if path.startswith('static/'):
		matchesSkip = False
		if path.startswith('static/api'):
			matchesSkip = True
		if path.startswith('static/blog_old'):
			matchesSkip = True
		if path.startswith('static/admin'):
			matchesSkip = True
		if path.startswith('static/fonts'):
			matchesSkip = True
		if path.startswith('static/forestry'):
			matchesSkip = True
		if not matchesSkip:
			path = path.replace('static/', '')
			for item in search_index:
				if item['path'] == path:
					algolia_update_object['requests'].append({
						'action': 'updateObject',
						'body': item,
					})
					break

url = 'https://KUHTAWO3GL.algolia.net/1/indexes/web/batch'
data = json.dumps(algolia_update_object).encode('utf8')


with open('thisindexdata.json', 'w') as jsonfile:
	json.dump(algolia_update_object, jsonfile)
	

#print(data)


headers = {
	'X-Algolia-API-Key': 'a163c7787b3aa7b594bff346d2e6d6b0',
	'X-Algolia-Application-Id': 'KUHTAWO3GL',
	'Content-Type': 'application/json',
}

#response = requests.post(url, headers=headers, json=algolia_update_object)
#print(response.json())


# For comparison, existing use is urllib.request.Request call 
# 	request = Request(url, data, headers)
