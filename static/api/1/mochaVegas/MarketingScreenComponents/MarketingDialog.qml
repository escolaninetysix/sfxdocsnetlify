/** \file
 * \brief Content for the Marketing Dialog
 *
 * Copyright (c) 2021 Imagineer Systems. All rights reserved.
 */

import QtQuick 2.12
import QtQuick.Controls 2.12
import QtQuick.Layouts 1.12

Rectangle {
   color: "#303030"

   ColumnLayout {
      id: topLayout
      anchors.fill: parent
      spacing: 12

      // Row 1
      MText {
         Layout.columnSpan: 2
         Layout.fillWidth: true

         html: '<h2>A message from Boris FX</h2>' +
               'Boris FX is thrilled that you are using Mocha AE. ' +
               'We’d like to say thanks by offering you a free animation tool ' +
               'to compliment Adobe After Effects and Premiere Pro.'
      }

      // Row 2
      Rectangle {
         color: "#444547"
         Layout.fillWidth: true
         Layout.fillHeight: true
         GridLayout {
            columns: 2
            columnSpacing: 12
            rowSpacing: 12
            anchors.fill: parent
            anchors.margins: 12
            MText {
               Layout.preferredWidth: 300
               html: '<h2>Free Particle Generator</h2>'
            }
            MText {
               Layout.preferredWidth: 350
               Layout.fillWidth: true
               html: '<h2>Particle Illusion</h2>'
            }
            MText {
               Layout.preferredWidth: 300
               Layout.fillHeight: true
               html: '<p>Did you know? Boris FX is the proud developer of the <a href="https://bit.ly/2OJgQXe">Boris FX ' +
                     'Suite</a>: an award-winning plugin collection including Mocha Pro, ' +
                     'Sapphire, Continuum, Silhouette, and Optics.</p>' +
                     '<p>To say thanks, we’d like to offer a free standalone application: <a href="https://bit.ly/3cNm1NU">' +
                     'Particle Illusion</a>.</p>' +
                     '<p>Create stunning particle animations for motion graphics, visual effects, ' +
                     'titles and more. Particle Illusion is fast, powerful and easy-to-use.</p>' +
                     '<p><a href="https://bit.ly/3cNm1NU">Learn More</a> &bull; ' +
                     '<a href="https://borisfx.com/downloads/?&product=Boris%20Particle%20Illusion%202021%20Standalone">Download Now</a></p>'
            }
            Image {
               Layout.preferredWidth: 350
               Layout.fillWidth: true
               Layout.fillHeight: true
               source: "https://borisfx-com-res.cloudinary.com/image/upload/v1619188880/api/1/mocha/MarketingScreenAssets/MarketingDialog1.png"
               fillMode: Image.PreserveAspectFit
               horizontalAlignment: Image.AlignLeft
               verticalAlignment: Image.AlignTop
            }
         }
      }

      // Row 3
      Rectangle {
         color: "#444547"
         Layout.fillWidth: true
         Layout.fillHeight: true
         GridLayout {
            columns: 2
            columnSpacing: 12
            rowSpacing: 12
            anchors.fill: parent
            anchors.margins: 12
            MText {
               Layout.preferredWidth: 300
               html: '<h2>Want More Mocha? Go Pro!</h2>'
            }
            MText {
               Layout.preferredWidth: 350
               Layout.fillWidth: true
               html: '<h2>Mocha Pro</h2>'
            }
            MText {
               Layout.preferredWidth: 300
               Layout.fillHeight: true
               html: '<p>If you are enjoying Mocha AE, we think you’ll love ' +
                     '<a href="https://bit.ly/2QikGqW">Mocha Pro</a> which ' +
                     'has even more useful tools for planar tracking, masking, and visual effects.</p>' +
                     '<p>Mocha Pro adds advanced features for Adobe users:</p>' +
                     '<ul style="list-style-position: outside; -qt-list-indent: 0; margin-left: 1em;">' +
                     '<li>New PowerMesh Warped Surface Tracking</li>' +
                     '<li>Run Mocha in Premiere Pro</li>' +
                     '<li>Advanced Roto with Magnetic Splines</li>' +
                     '<li>Object Removal, Stabilization, Lens Correction, and much more.</li>' +
                     '</ul>' +
                     '<p>Mocha Pro is now available as an affordable monthly or annual subscription.</p>' +
                     '<p><a href="https://bit.ly/2QikGqW">Learn More</a> &bull; ' +
                     '<a href="https://bit.ly/3qZcHM3">Purchase Now</a></p>'

            }
            Image {
               Layout.preferredWidth: 350
               Layout.fillWidth: true
               Layout.fillHeight: true
               source: "https://borisfx-com-res.cloudinary.com/image/upload/v1619188880/api/1/mocha/MarketingScreenAssets/MarketingDialog2.png"
               fillMode: Image.PreserveAspectFit
               horizontalAlignment: Image.AlignLeft
               verticalAlignment: Image.AlignTop
            }
         }
      }
   }
}
