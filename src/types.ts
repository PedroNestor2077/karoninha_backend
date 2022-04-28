export type Notification = {
  message: {
    title: string;
    body: string;
  };
  to: Array<string>;
  testDevice?: boolean;
};

export type PostDeviceControllerReturn = {
  created: boolean;
};
