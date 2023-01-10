import QtQml 2.12
import QtQuick 2.12
import QtQuick.Controls 2.5

Rectangle {
   color: "#303030"

   SwipeView {
      id: view
      currentIndex: pageIndicator.currentIndex
      anchors.fill: parent
      hoverEnabled: true

      Image {
         source: "https://borisfx-com-res.cloudinary.com/image/upload/v1633012062/api/1/mocha4ae_adobe/MochaAE2022_Splash_01.jpg"
         fillMode: Image.PreserveAspectFit
         Caption {
            heading: qsTr("Mocha Essentials Training")
            description: qsTr("Over 7 hours of training for new users")
            link: "https://bit.ly/3u9ALil"
            linkName: qsTr("Watch Now")
         }
      }

      Image {
         source: "https://borisfx-com-res.cloudinary.com/image/upload/v1633012062/api/1/mocha4ae_adobe/MochaAE2022_Splash_02.jpg"
         fillMode: Image.PreserveAspectFit
         Caption {
            heading: qsTr("Want More Mocha?")
            description: qsTr("Mocha Pro adds Mesh Tracking, Object Removes & More")
            link: "https://bit.ly/3u9hMoc"
            linkName: qsTr("Learn More")
         }
      }

      Image {
         source: "https://borisfx-com-res.cloudinary.com/image/upload/v1633012062/api/1/mocha4ae_adobe/Mocha2022_Splash_03.jpg"
         fillMode: Image.PreserveAspectFit
         Caption {
            heading: qsTr("Video: 20 Years of Planar Tracking")
            description: qsTr("The History of VFX")
            link: "https://bit.ly/39CvSF2"
            linkName: qsTr("Watch Now")
         }
      }
      
      Timer {
         id: slideshowTimer
         running: !view.hovered
         repeat: true
         interval: 10000
         onTriggered: {
            view.setCurrentIndex((view.currentIndex + 1) % view.count)
         }
      }
   }
   
   PageIndicator {
      id: pageIndicator
      count: view.count
      currentIndex: view.currentIndex
      anchors.bottom: view.bottom
      anchors.right: parent.right
      interactive: true
      delegate: Rectangle {
         implicitHeight: 6
         implicitWidth: 30
         color: "white"
         opacity: index === view.currentIndex ? 0.95 : pressed ? 0.7 : 0.45
         Behavior on opacity {
            OpacityAnimator {
               duration: 100
            }
         }
      }
   }
}

