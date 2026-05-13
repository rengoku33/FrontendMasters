## Hooks
### useRef
- Frozen object, only "current" can be modified
- prevents rerender by persisting

### useEffect
- runs background tasks based on dependency array
- return fn is triggered when component is unmounted (used for cleanup to prevent memory leak) <img width="693" height="446" alt="image" src="https://github.com/user-attachments/assets/663efb90-a544-44ed-8fd5-78bafeb2233c" />

### useState
- state and setState with init value (component which uses it will rerender)

### useContext
- global state management wrapped with provider (prevent prop drilling)

### useReducer and useSelector
- reducer is basically a function which is used to like update states, selector to fetch data from store

### useMemo
- execute once and prevent rerender unless and until the values in dep array changes

## strict mode
extra checks: (will give warning of bad cope practices, if packages, fns are deprecated or about to be)
- double renders components which will trigger effects twice (2 API calls, happens only in development not in builds)

### react dev tools
react dev tools is useful to inspect component and state changes
$r - last select component in inspector
$0 - last dom selected in inspector
Profiler > (falmegraph / ranked) check component rendering time and performance
