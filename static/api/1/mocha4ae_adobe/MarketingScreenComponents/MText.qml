/** \file
 * \brief MText is a styled text area used in the Marketing Dialog
 *
 * Copyright (c) 2021 Imagineer Systems. All rights reserved.
 */

import QtQuick 2.12

Text {
   property string html

   color: "#dddddd"
   linkColor: "#01a9e8"
   wrapMode: Text.WordWrap
   textFormat: Text.RichText
   font.pixelSize: 11
   onLinkActivated: Qt.openUrlExternally(link)

   text: '<html><head><style>' +
         'body { color: #dddddd }' +
         'a { color: #01a9e8 }' +
         'ul { list-style-position: outside; -qt-list-indent: 0; margin-left: 1em; }' +
         '</style></head>' +
         html +
         '</head>'

   // Link hover hand cursor
   MouseArea {
     anchors.fill: parent
     acceptedButtons: Qt.NoButton
     cursorShape: parent.hoveredLink ? Qt.PointingHandCursor : Qt.ArrowCursor
   }
}
