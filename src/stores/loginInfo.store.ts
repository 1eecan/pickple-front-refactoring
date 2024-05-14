import { create } from 'zustand';

import { Authenticated, Registration } from '@type/models';

type LoginInfo = Authenticated | Registration;
type LoginInfoState = {
  loginInfo: LoginInfo | null;
  setLoginInfo: (loginInfo: LoginInfo | null) => void;
};

export const useLoginInfoStore = create<LoginInfoState>((set) => ({
  loginInfo: null,
  setLoginInfo: (loginInfo) => set({ loginInfo }),
}));
