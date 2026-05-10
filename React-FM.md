## Hooks
### useRef
- Frozen object, only "current" can be modified
- prevents rerender by persisting

### useEffect
- runs background tasks based on dependency array
- return fn is triggered when component is unmounted (used for cleanup to prevent memory leak) <img width="693" height="446" alt="image" src="https://github.com/user-attachments/assets/663efb90-a544-44ed-8fd5-78bafeb2233c" />
