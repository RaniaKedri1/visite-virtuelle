import React, { useEffect, useRef, useState } from 'react';
import hotspotsScenes from './hotspots';
import '../styles/VirtualTour.css';

const VirtualTour = () => {
  const viewerRef = useRef(null);
  const [currentScene, setCurrentScene] = useState('LRcam2'); // Default initial scene

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialScene = urlParams.get('scene') || 'LRcam2';
    setCurrentScene(initialScene);

    if (window.pannellum) {
      if (viewerRef.current) {
        viewerRef.current.destroy();
      }

      viewerRef.current = window.pannellum.viewer('panorama', {
        default: {
          firstScene: initialScene,
          sceneFadeDuration: 1000
        },
        scenes: hotspotsScenes
      });

      const removeLoadButton = () => {
        const loadButton = document.querySelector('.pnlm-load-button');
        if (loadButton) {
          loadButton.remove();
        }
      };

      removeLoadButton();

      const handleNextClick = () => {
        if (viewerRef.current) {
          const sceneKeys = Object.keys(hotspotsScenes);
          let currentSceneIndex = sceneKeys.indexOf(currentScene);
          currentSceneIndex = (currentSceneIndex + 1) % sceneKeys.length;
          const newScene = sceneKeys[currentSceneIndex];
          viewerRef.current.loadScene(newScene);
          setCurrentScene(newScene);
        }
      };

      const handlePrevClick = () => {
        if (viewerRef.current) {
          const sceneKeys = Object.keys(hotspotsScenes);
          let currentSceneIndex = sceneKeys.indexOf(currentScene);
          currentSceneIndex = (currentSceneIndex - 1 + sceneKeys.length) % sceneKeys.length;
          const newScene = sceneKeys[currentSceneIndex];
          viewerRef.current.loadScene(newScene);
          setCurrentScene(newScene);
        }
      };

      const nextArrow = document.getElementById('next-image-arrow');
      const prevArrow = document.getElementById('prev-image-arrow');

      if (nextArrow && prevArrow) {
        nextArrow.addEventListener('click', handleNextClick);
        prevArrow.addEventListener('click', handlePrevClick);
      }

      return () => {
        if (nextArrow && prevArrow) {
          nextArrow.removeEventListener('click', handleNextClick);
          prevArrow.removeEventListener('click', handlePrevClick);
        }
      };
    }
  }, [currentScene]);

  return (
    <div id="panorama"></div>   
  );
};

export default VirtualTour;
