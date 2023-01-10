# Import a mocha download from the Imagineer publishing database

from __future__ import print_function
import argparse
import pymysql.cursors
import json
import re
import sys

def main():
    mocha_db_host = 'dbi.imagineersystems.com'
    mocha_db_port = 7979
    mocha_db_user = 'buildmaster'
    mocha_db_password = 'wolf6...'
    mocha_db = 'content'

    parser = argparse.ArgumentParser(description='Import a mocha download')
    parser.add_argument('-s', '--shortname', help='Shortname e.g. mpp-ofx')
    parser.add_argument('-v', '--version', help='User-visible version e.g. 5.5.2')
    parser.add_argument('-r', '--revision', help='Revision e.g. 13566')
    parser.add_argument('-p', '--platform', help='Platform e.g. mac_uni')
    parser.add_argument('-f', '--filename', help='Full filename of the download e.g. mochaProAdobe-5.5.2-13566-4502019.mac.dmg')
    parser.add_argument('-i', '--id', help='Database id of the download')
    parser.add_argument('-e', '--export', help='Export each download to a markdown file', action='store_true')
    parser.add_argument('-l', '--legacy', help='Select legacy builds instead of current', action='store_true')
    args = parser.parse_args()

    search_args = {}
    if args.shortname:
        search_args['`f`.`shortname`'] = args.shortname
    if args.version:
        search_args['`f`.`version`'] = args.version
    if args.revision:
        search_args['`f`.`revision`'] = args.revision
    if args.platform:
        search_args['`p`.`platform`'] = args.platform
    if args.filename:
        search_args['`f`.`filename`'] = args.filename
    if args.id:
        search_args['`f`.`id`'] = args.id
    if args.legacy:
        search_args['`fg`.`groupid`'] = 3
    else:
        search_args['`fg.`groupid`'] = 1

    if len(search_args) == 0:
        print("Supply at least one key to search for", file=sys.stderr)
        parser.print_help()
        sys.exit(1)

    db_connection = pymysql.connect(host=mocha_db_host,
                                    port=mocha_db_port,
                                    user=mocha_db_user,
                                    password=mocha_db_password,
                                    db=mocha_db,
                                    charset='utf8mb4',
                                    cursorclass=pymysql.cursors.DictCursor)

    sql = """SELECT `f`.`shortname` AS `shortname`,
                    CONCAT_WS('/', 'http://download.imagineersystems.com', `f`.`shortname`, `f`.`filename`) AS `download_url`,
                    `p`.`shortname` AS `platform`,
                    `f`.`version` AS `version`,
                    `f`.`created` AS `date`
             FROM `files` AS `f`
             LEFT JOIN `platforms` AS `p`
             ON `p`.`id` = `f`.`platform`
             LEFT JOIN `file_group` AS `fg`
             ON `fg`.`fileid` = `f`.`id`
             WHERE 1 """
    
    for key in search_args:
        sql += " AND {} = %({})s".format(key, key)
    
    try:
        with db_connection.cursor() as cursor:
            cursor.execute(sql, search_args)
            for file in cursor:
                export_download(file, args.export)
    finally:
        db_connection.close()

def export_download(file, export_to_file):
    ef = {}

    # Determine host
    if "adobe" in file['shortname']:
        ef['host'] = "Adobe"
    elif "avx2" in file['shortname']:
        ef['host'] = "Avid"
    elif "ofx" in file['shortname']:
        ef['host'] = "OFX Hosts"
    else:
        ef['host'] = "Standalone"

    # Determine platform
    if file['platform'] == "mac_uni":
        ef['platform'] = "Mac 64-Bit"
    elif file['platform'] == "win_x86_64":
        ef['platform'] = "Windows 64-Bit"
    elif file['platform'] == "rhel5_x86_64":
        ef['platform'] = "Linux 64-Bit"
    else:
        error = "Unsupported platform {}".format(file['platform'])
        raise Exception(error)

    # Form product
    shortname = file['shortname'].lower()
    if "mochapro" in shortname or "mpp" in shortname:
        ef['product'] = subproduct = "Mocha Pro"
    elif "mochavr" in shortname or "mvrp" in shortname:
        ef['product'] = "Mocha VR"
    elif "mochaplus" in shortname:
        ef['product'] = "Mocha Plus"
    elif "licensemanager" in shortname:
        ef['product'] = "Mocha License Manager"
    else:
        error = "Unsupported product {}".format(file['shortname'])
        raise Exception(error)
    
    # Form title
    product_with_host_type = "{} {}".format(ef['product'], file['version'])
    if ef['host'] != "Standalone":
        product_with_host_type += " Plug-In for"
        
    ef['title'] = "{} {} {}".format(product_with_host_type,
                                    ef['host'],
                                    ef['platform'].split()[0])
    ef['version'] = file['version']
    ef['require_login'] = True
    ef['download_url'] = file['download_url']
    ef['date'] = file['date'].isoformat()

    if export_to_file:
        filename = "{}.md".format(ef['title'].lower().replace(" ", "-").replace(".", "-"))
        with open(filename, 'w') as outfile:
            json.dump(ef, outfile, indent=2)
    else:
        print(json.dumps(ef))

        
if __name__ == "__main__":
    main()
