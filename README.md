# 🌟 Virtual Tour Application 🌟

Welcome to the **Virtual Tour Application**! Dive into an immersive property viewing experience with our state-of-the-art React and Pannellum integration. Explore panoramic images and navigate through various rooms seamlessly.

## 🚀 Overview

The Virtual Tour Application offers:

- **🖼️ Interactive Virtual Tour**: Navigate through 360-degree panoramas with interactive hotspots.
- **🏠 Main Property Page**: Features a dynamic image slideshow, detailed property descriptions, and an embedded virtual tour.

## 💡 Features

- **Virtual Tour Component**:
  - Displays panoramic views with clickable hotspots.
  - Powered by Pannellum for smooth and engaging experiences.
- **Main Page Component**:
  - Slideshow of property images with intuitive navigation.
  - Comprehensive property details and an embedded virtual tour iframe.

## 🛠️ Getting Started

### Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) (v14.x or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/RaniaKedri1/visite-virtuelle.git
   cd visite-virtuelle

📁 Project Structure
src/: Source code directory.
components/:
VirtualTour.js: Handles the virtual tour and scene transitions.
MainPage.js: Displays the property slideshow and details.
styles/:
VirtualTour.css: Styles for the virtual tour component.
MainPage.css: Styles for the main page.
hotspots.js: Configuration for virtual tour scenes and hotspots.
App.js: Configures routing with React Router.
public/: Contains static assets like images.
🎨 Components
VirtualTour
The VirtualTour component manages the 360-degree panorama view with interactive hotspots.

🔑 Key Functions:
Loads the initial scene based on URL parameters or defaults to LRcam2.
Handles scene transitions with navigation arrows.
MainPage
The MainPage component provides a slideshow of property images, detailed descriptions, and an iframe for the virtual tour.

✨ Key Features:
Slideshow: View property images with navigation buttons.
Property Details: Explore detailed information about the property.
Virtual Tour: Embedded iframe for an interactive virtual tour.
🗺️ Hotspots Configuration
The hotspots.js file defines:

Scene Objects: Panoramas and associated hotspots.
Hotspot Objects: Clickable elements linking to different scenes.
🎨 Styling
CSS Files: Located in the styles/ directory. Customize the appearance by modifying VirtualTour.css and MainPage.css.
⚙️ Troubleshooting
Dependency Issues: Ensure all dependencies are listed in package.json and installed correctly.
Virtual Tour Loading: Verify that Pannellum is loaded and initialized properly.
🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request for improvements or bug fixes.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

📧 Contact
For any questions or further information, reach out to us at info@refresh.com.

Enjoy your exploration with the Virtual Tour Application! 🌍🚀