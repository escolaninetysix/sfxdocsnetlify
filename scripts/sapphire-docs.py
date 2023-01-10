# Prepare Sapphire docs for Hugo
# Author: John-Paul Smith, jps@borisfx.com

# Prerequisites
# rclone, [https://rclone.org] with an access key for the BFX S3 account, configured as remote name 'bfxs3'
# python3, with modules beautifulsoup4 and lxml
# Installations of all variants of Sapphire on your machine. Currently this is AE, AVX, Sparks and OFX

# 1. Copy the 'docs' folders for each host in to the relevant host subfolder.
#    e.g. on Mac /Applications/GenArtsSapphireAE/docs
#    to
#    content/support/documentation/sapphire/ae

# 2. Find all image files used in the docs and copy them to static/assets/documentation/sapphire
#    for example using the command:
#    cd content/support/documentation/sapphire
#    rclone --include "*.jpg" --include "*.gif" copy . bfxs3:bfxcdn/documentation/sapphire/

#    Then delete those files from the original locations.

# 3. Process the HTML files using this script, for example
#    cd content/support/documentation/sapphire
#    python3 ~/src/bfx/web/scripts/sapphire-docs.py --image-path '//cdn.borisfx.com/documentation/sapphire' --date 2018-11-19 ae/*.html ofx/*.html sparks/*.html avx/*.html

# 4. Edit each intro.html to remove the link to genarts.com and incorrect tech support page.

import argparse
import re
import os
import sys
import json
from datetime import date, datetime
from bs4 import BeautifulSoup, Comment, Doctype

def main():
    parser = argparse.ArgumentParser(description='Fix links in Sapphire docs')
    parser.add_argument('--image-path', help='Path to images', default='..')
    parser.add_argument('--date', help='Date the docs were published, YYYY-MM-DD', default=date.today(),
                        type=lambda d: datetime.strptime(d, '%Y-%m-%d'))
    parser.add_argument('files', nargs='+', help='HTML files')
    args = parser.parse_args()
    image_path = args.image_path.rstrip('/')
    
    for file in args.files:
        process_file(file, image_path, args.date)

def process_file(file, image_path, publish_date):
    try:
        with open(file, 'r') as infile:
            soup = BeautifulSoup(infile, 'lxml')

            # Remove the DOCTYPE
            doctype = soup.find(string=lambda text:isinstance(text, Doctype))
            if doctype:
                doctype.extract()
        
            # Remove the head element - save the title first
            title_tag = soup.find('title')
            if title_tag:
                title = str(title_tag.string)
            else:
                # maybe an h1 tag if there's no title
                h1_tag = soup.find('h1')
                if h1_tag:
                    title = str(h1_tag.string)
            
            head = soup.find('head')
            if head:
                head.decompose()

            # Make the frontmatter
            frontmatter = {'title': title, 'date': publish_date.isoformat()}
                
            # Rewrite internal links to match Hugo's pretty URLs
            href_re = re.compile('(?P<slug>.+).html(?P<fragment>#.+)?')
            for link in soup.find_all('a'):
                if link.get('href'):
                    href_match = href_re.match(link.get('href'))
                    if href_match:
                        href = href_match.groupdict(default='')
                        link['href'] = '../{}{}'.format(href.get('slug').lower(),
                                                        href.get('fragment'))

            # Rewrite image locations to supplied path
            images = soup.find_all('img')
            for image in images:
                image['src'] = '{}/{}'.format(image_path, image.get('src'))

            # If there is only one image in the page set this image as the thumbnail
            if len(images) == 1:
                frontmatter['thumbnail_url'] = str(images[0].get('src'))
                
            # Remove copyright message
            page_break = soup.find(text = lambda text:isinstance(text, Comment) and text.strip() == 'PAGE BREAK')
            if page_break:
               para = page_break.find_parent('p')
               if para:
                   page_break.parent.decompose()

            # Remove the unnecessary body tags from the output, Hugo adds its own
            soup.body.hidden = True
            
            # If this is an intro page, add the right alias
            if os.path.basename(file) == 'intro.html':
                frontmatter['aliases'] = [ '/support/sapphire/{}'.format(os.path.basename(os.path.dirname(file))) ]
            
            outfile_path = '{}.tmp'.format(file)
            with open(outfile_path, 'w') as outfile:
                # Need frontmatter to ensure Hugo processes the file
                json.dump(frontmatter, outfile, indent=3)
                outfile.write('\n')
                outfile.write(soup.body.prettify())
                outfile.close()
                os.rename(outfile_path, file)

    except:
        print('Error processing file {}: '.format(file), file=sys.stderr)
        raise
                    
if __name__ == "__main__":
    main()

