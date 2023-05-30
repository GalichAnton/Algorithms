type MyOmit<T extends object, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};

type MyPick<T extends object, K extends keyof T> = {
  [k in  K] : T[k]
}