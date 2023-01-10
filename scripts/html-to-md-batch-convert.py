# HTML to Markdown batch conversion - set the folder
from markdownify import markdownify
from pathlib import Path
import os

# assign directory
directory = '/set/this/directory/'

# iterate over files in directory
files = Path(directory).glob('*')
for file in files:
	filesdirectory = open(file, "r").read()
	html = markdownify(filesdirectory, keep_inline_images_in=['a'], heading_style="ATX")
	with open(file, 'w') as outfile:
		outfile.write(html)
		outfile.close()
		print ("success")
	base = os.path.splitext(file)[0]
	os.rename(file, base + ".md")
	