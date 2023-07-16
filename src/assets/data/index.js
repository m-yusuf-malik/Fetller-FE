import images from "../images";

const toastOptions = {
  position: "bottom-right",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  className: "toast-message",
};

const batch_images = {
  0: images.batches.bronze,
  1: images.batches.silver,
  2: images.batches.gold,
  3: images.batches.diamond,
};

export default { toastOptions, batch_images };
