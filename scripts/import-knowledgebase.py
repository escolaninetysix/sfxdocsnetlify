import json
import os
import re
from datetime import date
from urllib.request import Request, urlopen

url = 'https://backend.borisfx.com/knowledge/posts'

request = Request(url)
article_json = urlopen(request).read().decode()
articles = json.loads(article_json)

json_data = []

os.chdir('content/knowledgebase')

for a in articles:
    data = a.copy()
    del data['answer']
    json_data.append(data)
    question_plaintext = re.sub('<[^<]+?>', '', a['question'])
    date_string = a['date'][:10]

    front_matter = '''
    {{
        "title" : "{}",
        "date" : "{}",
        "layout" : "article"
    }}'''.format(question_plaintext, date_string)

    body = '''
    {frontmatter}

    <div>
        {answer}
    </div>
    '''.format(frontmatter=front_matter, title=question_plaintext, date=date_string, answer=a['answer'])
    article_page = open('{}.html'.format(a['urlName']), 'w')
    article_page.write(body)

os.chdir('../../static')
article_json = open('knowledgebase.json', 'w')
article_json.write(json.dumps(json_data))


