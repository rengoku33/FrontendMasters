## Webworkers
basically the browser's main thread does everything
1. DOM rendering
2. React - component render/rerender
3. Event handling (clicks, inputs)
4. All JS execution (synchronous)
now if we block this JS execution, boom (UI freezes)... webworkers can solve this by "moving heavy JS computation of the main thread"  

usecases: 
- image, data processing / computations / heavy json parsing
- encryption / hashing
- runnning algorithms (search, sort, filter)
literally all intensive JS operations

<img width="38%" alt="image" src="https://github.com/user-attachments/assets/a8f16484-e6c2-407c-8305-cc2faac85dd7" />
<img width="38%" alt="image" src="https://github.com/user-attachments/assets/6f0f6daa-6ad0-4232-b376-ea6c68895c2e" />
<img width="28%" alt="image" src="https://github.com/user-attachments/assets/cf358150-4f4d-4308-bd8a-8fc8f9a60ffd" />
<img width="28%" alt="image" src="https://github.com/user-attachments/assets/8d1c4d41-02b1-4dcc-88bd-bd29b58bb4a5" />

### Shared Workers:
background JavaScript thread that multiple pages can connect to...
basically they can be shared across multiple browser contexts (tabs, windows, iframes) from the same origin.

# HTMX
a small JavaScript library that lets you build interactive web apps using mostly HTML attributes
<img width="48%" alt="image" src="https://github.com/user-attachments/assets/b7c3736b-4e6a-405c-af6f-f3a082352fd3" />
<img width="48%" alt="image" src="https://github.com/user-attachments/assets/69b43df9-3174-4b4c-be8b-8a93b5acec14" />

## Event emitter:
An Event Emitter is a vanilla JS pattern where: One part of your app emits events, and other parts listen to them.\
Emitter → "something happened"\
Listener → reacts to that event\

React prefers: 
(props, state, context) 
so you dont really use them but you can though...

## Performace: (personal opinion)
### code quality
  - algorithmic complexity (maps instead of arrays for searching)
  - reuse components, functions
  - memoize rather than making API calls where needed
  - image optimization (webp)
  - others done in build process of most frameworks (tree shaking[exports, modules, components, functions, variables], minification)

### rendering
- lazy loading (components when on viewport)
- lazy loading (route level) / chunk rendering (chunks are splitted based on route and rendered accordingly)
- reduce DOM size and depth (preventing nested divs)
- React (server compnents) (useMemo, useCallback)
- SSR (browser sends DOM rather than bundle), SSG (preload html and static components), ISR and a whole lot more 

### memory
- debouncing (delay execution until activity stops) - search and validation
- webworkers (run logic off the main thread) - encryption
- clear leaks (objects / events that are no longer needed but not cleared yet so they are still accessible)

## security
### HMAC
(Hash-based Message Authentication Code) validation is a cryptographic security process that uses a shared secret key and a hash function (like SHA-256).  
<img width="720" height="300" alt="image" src="https://github.com/user-attachments/assets/bb7db744-94df-466d-8568-dc9f4518e33f" />  
In UI we use lot of factors like timestamp, req body, query params, secret key and hash fn… to generate signature and then the same in BE… if we could alter the payload before signature generation then we can bypass the security.


