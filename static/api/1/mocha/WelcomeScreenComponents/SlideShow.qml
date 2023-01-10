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
         source: "https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto/v1651594282/api/1/mocha/WelcomeScreenAssets/MochaPro2022.5_Splash_01.jpg"
         fillMode: Image.PreserveAspectFit
         Caption {
            heading: qsTr("What's New: Mocha Pro 2022.5")
            description: qsTr("Tour New Features and Improvements")
            link: "https://bit.ly/3MISB3W"
            linkName: qsTr("Watch Now")
         }
      }

      Image {
         source: "https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto/v1651594282/api/1/mocha/WelcomeScreenAssets/MochaPro2022.5_Splash_02.jpg"
         fillMode: Image.PreserveAspectFit
         Caption {
            heading: qsTr("Lens Module Updates")
            description: qsTr("New Open Spline Workflow")
            link: "https://bit.ly/3MR50Tz"
            linkName: qsTr("Watch Now")
         }
      }

      Image {
         source: "https://borisfx-com-res.cloudinary.com/image/upload/q_auto,f_auto/v1651594281/api/1/mocha/WelcomeScreenAssets/MochaPro2022.5_Splash_03.jpg"
         fillMode: Image.PreserveAspectFit
         Caption {
            heading: qsTr("Essential Mocha Training")
            description: qsTr("7.5 hrs of Free Training Videos")
            link: "https://bit.ly/3KEmNfb"
            linkName: qsTr("Watch Now")
         }
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
