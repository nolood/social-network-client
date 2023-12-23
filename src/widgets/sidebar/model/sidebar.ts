import { makeAutoObservable } from "mobx";

class SidebarModule {
  constructor() {
    makeAutoObservable(this);
  }

  isVisible: boolean = false;

  show = (): void => {
    this.isVisible = true;
  };

  hide = (): void => {
    this.isVisible = false;
  };
}

export default new SidebarModule();
