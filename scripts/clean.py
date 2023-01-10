import subprocess

assets = subprocess.Popen('ls -S static/assets/', stdout=subprocess.PIPE, shell=True).communicate()[0].split('\n')

for asset in assets:
    count = int(subprocess.Popen('grep -l "assets/' + asset + '" -R content layouts | wc -l | bc', stdout=subprocess.PIPE, shell=True).communicate()[0])
    if count == 0:
        print(asset)
        subprocess.Popen('rm "static/assets/' + asset + '"', shell=True)

