import { AnyAction, Dispatch } from 'redux';
import { RouterTypes } from 'umi';
import { UserModelState } from './user';
import { AuthModelState } from './auth';
import { WorkorderModelState } from './workorder';
import { MessageCountState } from './messageCount';
import { InstitutionModelState } from './institution';
import { ProvincesModelState } from './provinces';
import { CurrentProjectStateModal } from '@/models/currentProject';
import { ProjectModelState } from '@/models/project';
import { QueryStateModal } from '@/models/query';
import { NavBarState } from '@/models/navBar';


export { UserModelState, WorkorderModelState, MessageCountState, InstitutionModelState, ProvincesModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  workorderStatus: WorkorderModelState;
  messageCount: MessageCountState;
  user: UserModelState;
  auth: AuthModelState;
  institution: InstitutionModelState;
  provinces: ProvincesModelState;
  project: ProjectModelState;
  currentProject: CurrentProjectStateModal;
  query: QueryStateModal;
  navBar: NavBarState;
}

export interface Route {
  routes?: Route[];
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
  dispatch?: Dispatch<AnyAction>;
}
