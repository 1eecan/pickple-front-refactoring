import { useTokenStore } from '@stores/accessToken.store';
import { AccessTokenState } from '@stores/accessToken.store';
import { useLoginInfoStore } from '@stores/loginInfo.store';
import { LoginInfoState } from '@stores/loginInfo.store';

type StoreHook<T> = {
  getState: () => T;
  setState: (state: Partial<T>, replace?: boolean) => void;
};

const mockStore = <T>(hook: StoreHook<T>, state: Partial<T>) => {
  const initStore = hook.getState();
  hook.setState({ ...initStore, ...state }, true);
};

export const mockUseLoginInfoStore = (state: Partial<LoginInfoState>) => {
  mockStore(useLoginInfoStore, state);
};

export const mockUseTokenStore = (state: Partial<AccessTokenState>) => {
  mockStore(useTokenStore, state);
};
