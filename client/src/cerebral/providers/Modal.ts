import { Provider } from "cerebral";

export default function Modal(modal) {
  let modalInstance;

  return Provider({
    create(modalPage) {
      if (!modalInstance) {
        modalInstance = modal.create(modalPage);
        modalInstance.present();
      }
    },
    close() {
      if (modalInstance) {
        modalInstance
          .dismiss()
          .then(error => {
            console.log(error);
            modalInstance = null;
          })
          .catch(error => {
            console.log(error);
            modalInstance = null;
          });
      }
    }
  });
}
