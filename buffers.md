## Benchmarking with Buffers

### binary-data.js

 - Encoding winner: `msgpackr`
 - Decoding winner: `@msgpack/msgpack`
<table>
<tr><th>Encoding</th><th>Decoding</th></tr>
<tr><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `msgpackr` | 422,662 |
| `notepack.io` | 335,250 |
| `notepack` | 290,915 |
| `@msgpack/msgpack` | 176,946 |
| `msgpack-lite` | 157,155 |
| `msgpack5` | 127,711 |
| `JSON` | 1,632 |

</td><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `@msgpack/msgpack` | 3,830,113 |
| `notepack.io` | 2,640,985 |
| `notepack` | 2,630,821 |
| `msgpackr` | 1,841,782 |
| `msgpack5` | 795,907 |
| `msgpack-lite` | 281,474 |
| `JSON` | 3,535 |

</td></tr> </table>

### binary-multiple.js

 - Encoding winner: `notepack.io`
 - Decoding winner: `notepack`
<table>
<tr><th>Encoding</th><th>Decoding</th></tr>
<tr><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `notepack.io` | 39,823 |
| `notepack` | 36,873 |
| `@msgpack/msgpack` | 36,108 |
| `msgpackr` | 23,438 |
| `msgpack-lite` | 17,405 |
| `msgpack5` | 7,255 |
| `JSON` | 1,759 |

</td><td>

| Implementation | ops/sec |
| ------------- | ------- |
| `notepack` | 23,120 |
| `notepack.io` | 22,499 |
| `msgpackr` | 19,524 |
| `@msgpack/msgpack` | 15,089 |
| `msgpack5` | 9,974 |
| `msgpack-lite` | 9,271 |
| `JSON` | 3,510 |

</td></tr> </table>