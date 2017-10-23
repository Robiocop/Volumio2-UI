class ModalService {
  constructor($uibModal) {
    'ngInject';
    this.$uibModal = $uibModal;
  }

  openModal(controller = 'ModalController', templateUrl = 'app/components/modals/default-modal.html', dataObj = null,
      size = 'sm', backdrop = 'static') {
    let modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: templateUrl,
      controller: controller,
      controllerAs: 'modal',
      size: size,
      backdrop: backdrop,
      resolve: {
        dataObj: () => dataObj
      }
    });

    // modalInstance.result.then(function() {
    // }, function() {
    //   //this.$log.debug('Modal dismissed at: ' + new Date());
    // });
    return modalInstance;
  }

  closeModal(){
    this.$uibModalInstance.close();
  }
}

export default ModalService;
