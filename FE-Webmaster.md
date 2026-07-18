# Box Box Box model
## Box layout
<img width="1636" height="881" alt="image" src="https://github.com/user-attachments/assets/704f0a19-cc75-4c21-9879-2e4a3b9fab2c" />

## Box properties
<img width="1421" height="568" alt="image" src="https://github.com/user-attachments/assets/46764746-2ef4-41d3-862e-ba20e71632c6" />  

### Box size:   
- **intrinsic:** the height and width of the box is determined by the content  
- **restricted:** the height and width is set via CSS / or determined by parent box  

### Box type:  
- **Block:** 100% of parent width, height is intrinsic (determined by content) (Top to Bottom)  
<img width="40%" alt="image" src="https://github.com/user-attachments/assets/ce8edf9a-d236-4457-9a92-bf204ea8e5f0" />  

- **Inline:** width and height is intrinsic, render as a string (Left to Right)  
<img width="40%" alt="image" src="https://github.com/user-attachments/assets/5995ef57-c3f3-4bdf-add5-136a16a072b1" />

`They do not respond to height and width properties` but padding and margin properties work thus achieving the goal but content width is unchanged   

- **Anonymous:** if some text is not wrapped in anything it takes anonymous block  
<img width="33%" alt="image" src="https://github.com/user-attachments/assets/3fbc644f-6760-4270-a12e-726307519079" />  

the width of an element can vary based on the type of box  
<img width="1279" height="739" alt="image" src="https://github.com/user-attachments/assets/cbef8047-0b0c-4495-bdcb-8f3c35ca437a" />  

# Formatting context
Basically consider it as a canvas where elements are ordered and placed based on the family it belongs to... ex: flex, grid, inline, block  
### Display properties:  
block, inline, inline-block, flex  
- **block:** start on a new line with 100% of parent width, height is intrinsic (determined by content) (Top to Bottom)
- **inline:** width and height is intrinsic, render as a string (Left to Right) , (padding and margin paradox: left and right will push the content but top and bottom wont)
  these two are OGs, others are just derivatives of these
- **inline block:** similar to inline but height and width are adjustable
- **flex:** inherits block but content inside is arranged into columns,
  it contains the following parent props:
  - justify-content:   center (align the content inside in the main axis - horizontal when flex direction is row)
  - align-items:       center (align the content inside in the cross axis - vertical when flex direction is row)
  - flex-direction: column (change it one below other - default is row)
  - flex-wrap: wrap (stop items from compressing in same line - default no wrap)
    - only then "align-content: flex-start" is unlocked to align items (similar to justify-content) and use "gap: 1em" to ad space between each items
  it contains following child props:
- flex-grow: 1 (on a single item to increase its size to fill the outer continaer)
- flex-shrink: 3 (to make it shrink faster on screen adapt or "0" to not shrink at all)
- flex-basis: 300px (to override the width of a container)
- align-self: center (to change the position of the item to flex-start(top), flex-end(down)) 

<hr>
<hr>
<hr>

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


