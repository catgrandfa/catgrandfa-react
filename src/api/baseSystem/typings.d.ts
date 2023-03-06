//系统管理接口

declare namespace LoginAPI {
  export type NoCaptcha = {
    username: string;
    password: string;
  };
}

declare namespace LogAPI {
  export type AddWebLog = {
    createdBy: string;
    createTime: string;
    logContent: string;
    logType: number;
    operateType: number;
    userId: string;
    username: string;
  };
}
