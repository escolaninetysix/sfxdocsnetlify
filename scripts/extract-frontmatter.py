from bs4 import BeautifulSoup
from pathlib import Path

# assign directory
directory = '../static/documentation/optics/Optics-2022/'

files = Path(directory).glob('*')
for file in files:
	with open(file, "r+") as f:
		content = f.read()
		bs = BeautifulSoup(content, "html.parser")
		x = bs.title.text
		child = bs.select("div .ww_skin_breadcrumbs > a:nth-of-type(2)")
		for head1 in bs.select("div .head1"):
			head1.decompose()		
		for head2 in bs.select("div .head2"):
			head2.decompose()			
		for footer in bs.select("footer"):
			footer.decompose()		
		for tag in bs.select("header"):
			tag.extract()
		for noscript in bs.select("noscript"):
			noscript.decompose()		
		for link in bs.select("link"):
			link.decompose()
		for meta in bs.select("meta"):
			meta.decompose()
		for script in bs.select("script"):
			script.decompose()
			clean = bs.prettify()
		for a in child:
			f.seek(0, 0)
			f.write("{\n\"doctype\": " + "\"static\",\n" + "\"title\":" + "\"" + x + "\",\n\"category\": " + "\"" + a.text + "\"\n}\n" + clean)