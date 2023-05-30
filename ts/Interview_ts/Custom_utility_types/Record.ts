type MyRecord<K extends number | string | symbol, V> = {
  [k in  K]: V
}