## Scroll Locking



| Category 	| Type    	| Title                            	|
|----------	|---------	|----------------------------------	|
| Hooks    	| General 	| Hook to disable/enable scrolling 	|

Example Usage

```typescript
import useScrollHook from "aphotic-ui/scrollHook";

export default function App() {
  // can be arbitrary name. "disableScroll" example
  const [disableScroll] = useScrollHook();
  return (
    <div className="App" style={{ minHeight: "1000px" }}>
      <button onClick={() => disableScroll(true)}>Enable Scroll </button>

      <button onClick={() => disableScroll(false)}>Disable Scroll</button>
    </div>
  );
}

```
