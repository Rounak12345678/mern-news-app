type USER_ROLES = "SYSTEM_ADMIN";

export interface IuserData {
  id: string;
  entityType: string;
  creationDate: string;
  lastModifiedDate: string;
  lastModifiedUser: string;
  isDeleted: boolean;
  account: {
    entityType: string;
    id: string;
  };
  person: {
    firstName: string;
    lastName: string;
    email: string;
  };
  secondaryEmails: string[];
  autoupdateO365Calendar: boolean;
  enabledModules: {
    CHAT: boolean;
    ACTIVITIES: boolean;
    CALENDAR: boolean;
    PLAYGROUND: boolean;
    INFERRED_METADATA: boolean;
    TENANT_CONFIGURATION: boolean;
    ARCHIVE: boolean;
    TRAINING: boolean;
  };
  userRole: USER_ROLES;
}

export interface ILoginResponse {
  user: IuserData;
  jwt: string;
  error?: string;
}
