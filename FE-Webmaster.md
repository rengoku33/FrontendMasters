## Webworkers
basically the browser's main thread does everything
1. DOM rendering
2. React - component render/rerender
3. Event handling (clicks, inputs)
4. All JS execution (synchronous)
now if we block this JS execution, boom (UI freezes)... webworkers can solve this by "moving heavy JS computation of the main thread"\

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
Listener → reacts to that event\\

React prefers: 
(props, 
state, 
context) 
so you dont really use them but you can though...
