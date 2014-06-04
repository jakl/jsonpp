Description
-----------

A command to pretty print json from a pipe or file


Install
-------

Make sure [nodejs](http://nodejs.org) is up to date

`npm install -g jsonpp`


Run
---

```
echo '[42, 42]' | jsonpp
[
  42,
  42
]
```

```
echo '{"a": 42}' > tmp.json
jsonpp tmp.json
{
  "a": 42
}
```
