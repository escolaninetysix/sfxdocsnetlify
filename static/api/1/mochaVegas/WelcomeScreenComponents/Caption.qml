import QtQuick 2.5
import QtQuick.Controls 2.5

Label {
  property string heading
  property string description
  property url link
  property string linkName

  anchors.left: parent.left
  anchors.bottom: parent.bottom
  anchors.margins: 12
  color: "white"
  linkColor: "white"
  textFormat: Text.StyledText
  onLinkActivated: Qt.openUrlExternally(link)
  text: qsTr('<h1>%1</h1><p>%2</p><a href="%3">%4</a>').arg(heading).arg(description).arg(link).arg(linkName)

  background: Rectangle {
    anchors.horizontalCenter: parent.horizontalCenter
    anchors.verticalCenter: parent.verticalCenter
    width: parent.width + 24
    height: parent.height + 24
    color: "black"
    opacity: 0.8
  }
  
  MouseArea {
    anchors.fill: parent
    acceptedButtons: Qt.NoButton
    cursorShape: parent.hoveredLink ? Qt.PointingHandCursor : Qt.ArrowCursor
  }
}
