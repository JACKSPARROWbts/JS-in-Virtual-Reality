This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## What and Why VR?
Well everyone knows about virtual reality but you will be surprise to know that virtual reality is now available in webpage too. We can use Webgl render for webpage and XR which is the immersive web mode to dive deep into the virtual reality. We can teleport to various places , meet each other in vr mode and much more.

## what is three.js?
Three.js is the best API for developing the 3d effects and virtual reality mode. We can also render the 360 degree images in page, gltf models in webpage too.
## what is WEBXR?
There are three types of concepts namely: WebVR, WebAR, WebXR . For, WebVR we can experience only the virtual reality and WebAR we can realize only the use of Augmented Reality .But WebXR uses both Virtual and Augmented Reality.
## Immersive Reality:
    let playTexture = new UrlTexture('media/textures/play-button.png');
      let playButton = new ButtonNode(playTexture, () => {
        if (video.paused) {
          playButton.visible = false;
          video.play();
        }
      });
      playButton.translation = [0.025, 0.275, -4.2];
      playButton.scale = [5.0, 5.0, 5.0];
      scene.addNode(playButton);

      function initXR() {
        xrButton = new WebXRButton({
          onRequestSession: onRequestSession,
          onEndSession: onEndSession
        });
        document.querySelector('header').appendChild(xrButton.domElement);

        if (navigator.xr) {
          navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
            xrButton.enabled = supported;
          });

          navigator.xr.requestSession('inline').then(onSessionStarted);
        }
      }

      function initGL() {
        if (gl)
          return;

        gl = createWebGLContext({
          xrCompatible: true
        });
        document.body.appendChild(gl.canvas);

        function onResize() {
          gl.canvas.width = gl.canvas.clientWidth * window.devicePixelRatio;
          gl.canvas.height = gl.canvas.clientHeight * window.devicePixelRatio;
        }
        window.addEventListener('resize', onResize);
        onResize();

        renderer = new Renderer(gl);
        scene.setRenderer(renderer);
      }
   To check the browser with Xr compatibility you can check with three.VRcompatible=true and we should enable the VR or XR flags in chrome or any browser you are using. For chrome version 80 seems to work fine. But, It appears there are several issues in that too. But for me, using it in Vivo Browser worked awesome. So you can also try that.
  ### What did I do here?
  First, I just developed the teleport like effect to visit some places . You can also use more places for more visit. Then I add theatre like  effect to watch movies in theatre in virtual reality mode. Below video is the sample for that. 
![React360 for our Safety](https://user-images.githubusercontent.com/59025857/99689129-9bb4f000-2aac-11eb-9614-6a511204792f.gif)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
