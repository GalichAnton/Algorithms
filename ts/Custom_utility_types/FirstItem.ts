type FirstItem<T extends any[]> = T[0] extends undefined ? never : T[0]