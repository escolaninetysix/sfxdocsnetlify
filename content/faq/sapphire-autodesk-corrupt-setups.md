{
  "title": "One Sapphire spark aborts when first loaded, although the others work fine.",
  "date": "2018-04-26T00:00:00+00:00",
  "description": "One Sapphire spark aborts when first loaded, although the others work fine.",
  "excerpt": "You may have a corrupt setup file for that spark. Type these commands to a shell, replacing \"LensFlare\" with the spark name that is not working. . .",
  "image_url": "",
  "tags": [
    "Sapphire",
    "Autodesk"
  ]
}

You may have a corrupt setup file for that spark. Type these commands to a shell, replacing "LensFlare" with the spark name that is not working. (The setupch file only exists in some cases.)

% cd /usr/discreet/sparks/sapphire_10
% mv S_LensFlare.spark.setup bad.setup  
% mv S_LensFlare.spark.setupch bad.setupch

Then try loading the spark again. If this fixes the problem, please e-mail us the bad setup files so we can inspect them.
