# Retag one or more pages

import json

# Note this is "python-frontmatter" not "frontmatter"
import frontmatter
import argparse
import csv
import sys

def main():
    parser = argparse.ArgumentParser(description='Retag one or more files')
    parser.add_argument('-r', '--replace', nargs=2, metavar=('OLD', 'NEW'), help='Replace the OLD tag with NEW')
    parser.add_argument('-d', '--delete', nargs=1, metavar='TAG', help='Tag to delete')
    parser.add_argument('-a', '--add', nargs=1, metavar='TAG', help='Tag to add')
    parser.add_argument('file', nargs='+', help='File to retag')
    parser.add_argument('-l', '--list', action='store_true', help='List existing tags on the files')
    parser.add_argument('--format', nargs=1, choices=['simple', 'csv'], default='simple', help='Format for tag listing. Default is simple.')
    args = parser.parse_args()
    
    if 'csv' in args.format:
        csv_data = list()
        csv_fields = set()

    for filename in args.file:
        try:
            dirty = False
            post = frontmatter.load(filename)

            if args.replace:
                if 'tagging' in post.keys() and args.replace[0] in post['tagging']:
                    post['tagging'].remove(args.replace[0])
                    post['tagging'].append(args.replace[1])
                    dirty = True

            if args.add:
                if 'tagging' not in post.keys():
                    post['tagging'] = args.add
                else:
                    post['tagging'] = list(set(args.add + post['tagging']))
                dirty = True

            if args.delete and 'tagging' in post.keys():
                post['tagging'] = [item for item in post['tagging'] if item not in args.delete]
                dirty = True

            if dirty:
                # frontmatter.dump seems to insert extra braces
                with open(filename, 'w') as outfile:
                    json.dump(post.metadata, outfile, indent=3)
                    outfile.write('\n\n' + post.content + '\n')

            if args.list:
                if 'csv' in args.format:
                    if 'tagging' in post.keys():
                        row = post['tagging']
                        csv_fields.update(row.keys())
                        for key, value in row.items():
                            if isinstance(value, list):
                                row[key] = ';'.join(value)
                        row['filename'] = filename
                        csv_data.append(row)
                    else:
                        csv_data.append([{'filename': filename}])
                else:
                    if 'simple' in args.format:
                        if 'tagging' in post.keys():
                            if len(post['tagging']) > 0:
                                print("{}: ".format(filename), end='')
                                print(post['tagging'])

        except IsADirectoryError:
            pass

    if args.list:
        if 'csv' in args.format:
            # Add filename field here, so it's always the first column
            csv_writer = csv.DictWriter(sys.stdout, fieldnames=['filename']+list(csv_fields), quoting=csv.QUOTE_ALL)
            csv_writer.writeheader()
            [csv_writer.writerow(item) for item in csv_data]
    
if __name__ == "__main__":
    main()

