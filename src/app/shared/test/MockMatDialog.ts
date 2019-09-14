import { Observable } from 'rxjs';
export class MockMatDialog {
  open() {
    return {
      // afterClosed: () => Observable.of([postsMock[0]])
    };
  }
  close() {
    return '';
  }
  closeAll() {}
}
