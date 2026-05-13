## Hooks
### useRef
- Frozen object, only "current" can be modified
- prevents rerender by persisting

### useEffect
- runs background tasks based on dependency array
- return fn is triggered when component is unmounted (used for cleanup to prevent memory leak) <img width="450" height="250" alt="image" src="https://github.com/user-attachments/assets/663efb90-a544-44ed-8fd5-78bafeb2233c" />

### useState
- state and setState with init value (component which uses it will rerender)

### useContext
- global state management wrapped with provider (prevent prop drilling)

### useReducer and useSelector
- reducer is basically a function which is used to like update states, selector to fetch data from store

### useMemo (memoize a value) && useCallback (memoize a fn)
- execute once and prevent rerender unless and until the values in dep array changes
<img width="48%" src="https://github.com/user-attachments/assets/a3574860-ff10-4794-923c-c541e7bad712" />
<img width="48%" src="https://github.com/user-attachments/assets/2d853363-00b5-4414-984a-4a8950baf15b" />



## strict mode
extra checks: (will give warning of bad cope practices, if packages, fns are deprecated or about to be)
- double renders components which will trigger effects twice (2 API calls, happens only in development not in builds)

### react dev tools
react dev tools is useful to inspect component and state changes
$r - last select component in inspector\
$0 - last dom selected in inspector\
Profiler > (falmegraph / ranked) check component rendering time and performance

## lazy loading
split build into chunks and render them only when its route is visited
<img width="520" height="340" alt="image" src="https://github.com/user-attachments/assets/62535178-e27a-4f82-957b-c43752dc790a" />

## React Compiler
A build tool installed through npm amd add to vite config\
It automatically optimizes React app at build time by handling memoization, eliminating the need for manual useMemo, useCallback, and React.memo
