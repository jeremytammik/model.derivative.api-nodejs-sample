# Roomedit3dV2

[![Node.js](https://img.shields.io/badge/Node.js-6.2.0-blue.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-3.8.9-blue.svg)](https://www.npmjs.com/)
[![Viewer](https://img.shields.io/badge/Viewer-v2.8-green.svg)](http://developer-autodesk.github.io/)
![Platforms](https://img.shields.io/badge/platform-windows%20%7C%20osx%20%7C%20linux-lightgray.svg)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

Forge real-time round-trip BIM editor, consisting of a node.js web server and client-side viewer extension.

## Description

This sample is based on and an enhancement of the
Forge [Model Derivative API sample](https://github.com/Developer-Autodesk/model.derivative.api-nodejs-sample).

That sample implements the following functionality:

- Log in to an A360 account
- Display the Data Management hierarchy of hubs, projects, folder, items and versions
- Upload new CAD files
- Select an existing CAD file
- Use the Model Derivative API to translate it for the viewer, retrieve its internal element structure, access element data and translate geometry to OBJ
- Display the file in the viewer

The original sample is designed for initial testing on multiple enviroments (DEV, STG and PROD).

For the sake of simplicity, that flexibility has been disabled in roomedit3dv2, which only works in the PRODUCTION envirnment.

In addition to the original model derivative sample functionality listed above, roomedit3dv2 implements the `Roomedit3dTranslationTool` viewer extension to modify the location of a selected element in the viewer and broadcast that modification data to socket.io clients.

That can potentially be used to implement a real-time round-trip BIM update:

- Start `Roomedit3dTranslationTool`
- Select an element
- Transform its location
- Report the data back from the viewer to the web server via a REST API call
- Broadcast the data from the web server to the C# .NET clients to update the BIM

If you have installed and launched
the [Roomedit3dApp Revit add-in](https://github.com/jeremytammik/Roomedit3dApp) in
the same model and run its external command to subscribe to the broadcast events, you will see your own BIM being updated live by the element translations defined in the Forge viewer.

For more information on the original sample, please refer to
the [model derivative sample GitHub repo](https://github.com/Developer-Autodesk/model.derivative.api-nodejs-sample).

For more information on the viewer extension and real-time round-trip BIM update functionality, look at the
initial [roomedit3d](https://github.com/jeremytammik/roomedit3d) implementation
not using the full three-legged Forge authentication to access third-party CAD data


## Live demo

This sample is available, up and running, and can be tested online at [https://roomedit3dv2.herokuapp.com](https://roomedit3dv2.herokuapp.com).


## Authors

- [Adam Nagy](http://adndevblog.typepad.com/cloud_and_mobile/adam-nagy.html), Forge Platform Partner Development
- Jeremy Tammik,
[The Building Coder](http://thebuildingcoder.typepad.com) and
[The 3D Web Coder](http://the3dwebcoder.typepad.com),
[ADN](http://www.autodesk.com/adn)
[Open](http://www.autodesk.com/adnopen),
[Autodesk Inc.](http://www.autodesk.com)


## License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for full details.
