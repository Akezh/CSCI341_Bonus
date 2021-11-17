export enum Console {
  ADD,
  UPDATE,
  DELETE,
}

export type ServerResponse =
  | undefined
  | {
      readonly message: string;
    };
