## CHANGELOG

* v4.1.4
  * Fix bug on StreamTCP 
  * more tests !

* v4.1.3
  * Export StreamTCP and prefixWithLength 
  * more tests !

* v4.1.2
  * Typescript
  * Migrate all tests to Jest

* v4.1.1
  * Fix padding when reading dictionaries and arrays thx @timoschwarzer
  * putVar POOL_BYTE_ARRAY thx @timoschwarzer
  * can now force encode to specific type
  * more tests !

* v4.1.0
  * remove useless function
  * putVar can now encode Variant : AABB Color Plane Quat Rect2 Vector2 Vector3
  * Use NodeJs Buffer, no more GdBuffer anymore !!

* v4.0.0
  * remove async/await thx @phated

* v3.0.0
  * merge tcp, udp and ws features in @gd-com/utils

* v2.1.3
  * put_var now return only buffer (in promise) 

* v2.1.2
  * some bugfix

* v2.1.1
  * int64

* v2.1.0
  * promisify function

* v2.0.0
  * rethink of the architecture
  * add put / get method like in StreamPeer

* v1.0.0
  * Encode
    * Null
    * Boolean
    * Integer
    * Float
    * String
    * Array
    * Dictionnary
  * Decode everything except node path
