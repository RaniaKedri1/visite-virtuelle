
const hotspotsScenes = {

    LRcam2: {
        type: "equirectangular",
        panorama: "img/LRcam2.jpg",
        autoLoad: true,
        autoRotate: -2,

        hotSpots: [
            {
                pitch: -5, yaw: 5, type: "scene", text: "Go to the EnterKitechen", sceneId: "EnterKitechen"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }
            },
            {
                pitch: 5, yaw: -90, type: "scene", text: "Go to the LRcam1", sceneId: "LRcam1"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }
            },
            {
                pitch: -5, yaw: -30, type: "scene", text: "Go to the kidsRoom", sceneId: "kidsRoom"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
            {
                pitch: -5, yaw: 45, type: "scene", text: "Go to the bathroom", sceneId: "bathroom"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
            {
                pitch: -5, yaw: 75, type: "scene", text: "Go to the LRcam4", sceneId: "LRcam4"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },

        ],
    },
    LRcam1: {
        type: "equirectangular",
        panorama: "img/LRcam1.jpg",
        autoLoad: true,
        autoRotate: -2,
        hotSpots: [
            {
                pitch: -5, yaw: -100, type: "scene", text: "Go to the EnterKitechen", sceneId: "EnterKitechen"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
            {
                pitch: -10, yaw: -40, type: "scene", text: "Go to the kidsRoom", sceneId: "kidsRoom"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
            {
                pitch: -10, yaw: 80, type: "scene", text: "Go to the LRcam2", sceneId: "LRcam2"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },

        ],
    },
    LRcam3: {
        type: "equirectangular",
        panorama: "img/LRcam3.jpg",
        autoLoad: true,
        autoRotate: -2,
        hotSpots: [
            {
                pitch: -5, yaw: 10, type: "scene", text: "Go to the LRcam2", sceneId: "LRcam2"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
            {
                pitch: 10, yaw: 60, type: "scene", text: "Go to the LRcam1", sceneId: "LRcam1"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
            {
                pitch: -5, yaw: -70, type: "scene", text: "Go to the LRcam4", sceneId: "LRcam4"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },

        ],
    },
    LRcam4: {
        type: "equirectangular",
        panorama: "img/LRcam4.jpg",
        autoLoad: false,
        autoRotate: -2,
        hotSpots: [
            {
                pitch: -5, yaw: -10, type: "scene", text: "Go to the LRcam1", sceneId: "LRcam1"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
            {
                pitch: -10, yaw: 70, type: "scene", text: "Go to the LRcam3", sceneId: "LRcam3"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
            {
                pitch: -15, yaw: -60, type: "scene", text: "Go to the LRcam2", sceneId: "LRcam2"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },

        ],
    },
    leaveKitchen: {
        type: "equirectangular",
        panorama: "img/leaveKitchen.jpg",
        autoLoad: true,
        autoRotate: -2,
        hotSpots: [
            {
                pitch: 0, yaw: 120, type: "scene", text: "Go to LRcam1", sceneId: "LRcam1"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
        ],
    },

    bedroom: {
        type: "equirectangular",
        panorama: "img/bedroom.jpg",
        autoLoad: true,
        autoRotate: -2,
        hotSpots: [
            {
                pitch: 0, yaw: -75, type: "scene", text: "Go to leaveKitchen", sceneId: "leaveKitchen"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
        ],
    },
    bathroom: {
        type: "equirectangular",
        panorama: "img/bathroom.jpg",
        autoLoad: true,
        autoRotate: -2,
        hotSpots: [
            {
                pitch: -5, yaw: -65, type: "scene", text: "Go to LRcam2", sceneId: "LRcam2"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
        ],
    },
    EnterKitechen: {
        type: "equirectangular",
        panorama: "img/EnterKitechen.jpg",
        autoLoad: true,
        autoRotate: -2,
        hotSpots: [
            {
                pitch: 10, yaw: -40, type: "scene", text: "Go to leaveKitchen", sceneId: "leaveKitchen"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }
            },

        ],
    },
    kidsRoom: {
        type: "equirectangular",
        panorama: "img/kidsRoom.jpg",
        autoLoad: true,
        autoRotate: -2,
        hotSpots: [
            {
                pitch: 0, yaw: 190, type: "scene", text: "Go to LRcam3", sceneId: "LRcam3"
                , cssClass: "custom-hotspot", createTooltipFunc: hotspotTooltip, createTooltipArgs: { imgSrc: "img/arrow-hotspot.gif" }

            },
        ],
    },
};
// create a hotspot with a custom image inside a given hotSpotDiv element
function hotspotTooltip(hotSpotDiv, args) {
    console.log("Creating hotspot with args:", args);
    var img = document.createElement('img');
    img.src = args.imgSrc;
    img.className = "custom-hotspot-image";
    hotSpotDiv.appendChild(img);
}



export default hotspotsScenes;

