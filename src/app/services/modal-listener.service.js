class ModalListenerService {
  constructor($rootScope, socketService, modalService, mockService, $log) {
    'ngInject';
    this.socketService = socketService;
    this.modalService = modalService;
    this.$log = $log;

    // const mockModal = mockService.get('customModals');
    // this.openModal(mockModal);

    $rootScope.$on('socket:init', () => {
      this.init();
    });
    $rootScope.$on('socket:reconnect', () => {
      this.initService();
    });
  }

  openModal(data) {
    this.modalService.openModal(
      'ModalCustomController',
      'app/components/modals/modal-custom.html',
      data,
      data.size);
  }

  cleseModal() {
    this.modalService.closeModal();
  }

  init() {
    this.registerListner();
    this.initService();
  }

  registerListner() {
    this.socketService.on('openModal', (data) => {
      this.$log.debug('openModal', data);
      this.openModal(data);
    });

    this.socketService.on('closeModal', () => {
      this.$log.debug('closeModal', '');
      this.closeModal();
    });
  }

  initService() {
  }
}

export default ModalListenerService;
