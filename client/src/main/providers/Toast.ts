import { Provider } from "cerebral";

export default function Toast(toast) {
  let toastInstance;

  return Provider({
    show(message) {
      toastInstance = toast.create({
        message,
        duration: 3000,
        position: "top"
      });
      toastInstance.present();
    }
  });
}
