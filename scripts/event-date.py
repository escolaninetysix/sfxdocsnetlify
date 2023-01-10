# Copy the event_date field to date

import json
import frontmatter
import argparse
from datetime import datetime

def main():
    parser = argparse.ArgumentParser(description='Retag one or more files')
    parser.add_argument('file', nargs='+', help='File to retag')
    args = parser.parse_args()
    
    for filename in args.file:
        try:
            post = frontmatter.load(filename)

            if 'event_date' in post.keys():
                event_date = datetime.strptime(post['event_date'][0], '%Y%m%d')
                post['date'] = event_date.strftime('%Y-%m-%d')
                del post['event_date']
                with open(filename, 'w') as outfile:
                    json.dump(post.metadata, outfile, indent=3)
                    outfile.write('\n\n' + post.content + '\n')
        except IsADirectoryError:
            pass
        
if __name__ == "__main__":
    main()

